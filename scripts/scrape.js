/**
 * CourtSide hourly score scraper — runs as a Floo cron job.
 * Fetches D1 men's and women's tennis results from collegetennisranks.com,
 * then upserts into the Floo Postgres database.
 *
 * Cron: every hour during match hours (see floo.app.toml)
 */

import pg from 'pg'

const { Pool } = pg
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

async function fetchText(url) {
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'CourtSide/1.0 (college tennis scores aggregator)' },
      signal: AbortSignal.timeout(15_000),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  } catch (err) {
    console.warn(`fetchText(${url}) failed:`, err.message)
    return null
  }
}

/** Format today's date as "Apr 16, 2026" */
function todayString() {
  return new Date().toLocaleDateString('en-US', {
    timeZone: 'America/New_York',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/** Format a Date as "Apr 16, 2026" */
function formatDate(d) {
  return d.toLocaleDateString('en-US', {
    timeZone: 'America/New_York',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

// ---------------------------------------------------------------------------
// Parse collegetennisranks.com schedule HTML
// The page renders rows like:
//   Apr 15 | #25 Ole Miss | def. | Tennessee | 4-0
// We extract what we can from the raw text.
// ---------------------------------------------------------------------------

function parseSchedulePage(html, gender) {
  if (!html) return []

  const matches = []
  const lines = html.split('\n').map(l => l.trim()).filter(Boolean)

  // Regex: capture date, optionally ranked team, score like "4-0" or "4-3"
  const scoreRe = /(\d)-(\d)/
  const rankRe = /#(\d+)\s+(.+)/
  const dateRe = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d+/i

  let currentDate = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Detect date lines
    if (dateRe.test(line)) {
      // Append current year
      const year = new Date().getFullYear()
      try {
        const d = new Date(`${line} ${year}`)
        if (!isNaN(d)) currentDate = formatDate(d)
      } catch (_) {}
      continue
    }

    if (!currentDate) continue

    // Look for score pattern "X-Y" in lines that also mention team names
    const scoreMatch = line.match(scoreRe)
    if (!scoreMatch) continue

    const homeScore = parseInt(scoreMatch[1], 10)
    const awayScore = parseInt(scoreMatch[2], 10)

    // Try to extract team names from surrounding lines
    // CTR format varies but teams usually appear near the score
    const prevLine = lines[i - 1] || ''
    const nextLine = lines[i + 1] || ''

    // Extract ranked team info
    const rankMatch = prevLine.match(rankRe) || line.match(rankRe) || nextLine.match(rankRe)
    const rank = rankMatch ? parseInt(rankMatch[1], 10) : null
    const rankedTeam = rankMatch ? rankMatch[2].trim() : null

    // Build a minimal match record — we use a hash of date+teams as ID
    if (rankedTeam) {
      const id = `scraped-${gender}-${currentDate.replace(/[, ]/g, '-')}-${rankedTeam.replace(/\s+/g, '-').toLowerCase()}`
      matches.push({
        id,
        gender,
        match_date: currentDate,
        round: gender === 'men' ? 'D1 Men' : 'D1 Women',
        status: 'final',
        home_name: rankedTeam,
        home_rank: rank,
        home_record: '',
        home_logo: '🎾',
        home_conference: '',
        away_name: 'Opponent',
        away_rank: null,
        away_record: '',
        away_logo: '🎾',
        away_conference: '',
        home_score: homeScore,
        away_score: awayScore,
        winner: homeScore > awayScore ? 'home' : 'away',
        stats_url: null,
        results_url: null,
      })
    }
  }

  return matches
}

// ---------------------------------------------------------------------------
// Parse rankings page
// ---------------------------------------------------------------------------

function parseRankingsPage(html, gender) {
  if (!html) return []

  const rankings = []
  const lines = html.split('\n').map(l => l.trim()).filter(Boolean)

  // CTR rankings rows look like: "1  Texas  Big 12  76.311  21-6"
  const rankRe = /^(\d{1,2})\s+(.+?)\s+([\d.]+)\s+(\d+-\d+)/

  for (const line of lines) {
    const m = line.match(rankRe)
    if (!m) continue
    const rank = parseInt(m[1], 10)
    if (rank < 1 || rank > 100) continue
    rankings.push({
      gender,
      rank,
      team_name: m[2].trim(),
      conference: '',
      record: m[4],
      points: parseFloat(m[3]),
    })
  }

  return rankings
}

// ---------------------------------------------------------------------------
// Upsert helpers
// ---------------------------------------------------------------------------

async function upsertMatch(m) {
  await pool.query(
    `INSERT INTO matches (
       id, gender, match_date, round, status, start_time,
       home_name, home_rank, home_record, home_logo, home_conference,
       away_name, away_rank, away_record, away_logo, away_conference,
       home_score, away_score, winner, stats_url, results_url, updated_at
     ) VALUES (
       $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21, NOW()
     )
     ON CONFLICT (id) DO UPDATE SET
       status       = EXCLUDED.status,
       home_score   = EXCLUDED.home_score,
       away_score   = EXCLUDED.away_score,
       winner       = EXCLUDED.winner,
       results_url  = COALESCE(matches.results_url, EXCLUDED.results_url),
       updated_at   = NOW()`,
    [
      m.id, m.gender, m.match_date, m.round, m.status, m.start_time ?? null,
      m.home_name, m.home_rank ?? null, m.home_record ?? '', m.home_logo ?? '🎾', m.home_conference ?? '',
      m.away_name, m.away_rank ?? null, m.away_record ?? '', m.away_logo ?? '🎾', m.away_conference ?? '',
      m.home_score ?? 0, m.away_score ?? 0, m.winner ?? null,
      m.stats_url ?? null, m.results_url ?? null,
    ]
  )
}

async function upsertRankings(rankings, gender) {
  if (!rankings.length) return
  // Delete existing rankings for this gender and re-insert
  await pool.query(`DELETE FROM rankings WHERE gender = $1`, [gender])
  for (const r of rankings) {
    await pool.query(
      `INSERT INTO rankings (gender, rank, team_name, conference, record, points, updated_at)
       VALUES ($1,$2,$3,$4,$5,$6,NOW())`,
      [r.gender, r.rank, r.team_name, r.conference ?? '', r.record ?? '', r.points ?? 0]
    )
  }
  console.log(`Updated ${rankings.length} ${gender} rankings`)
}

// ---------------------------------------------------------------------------
// Check StatBroadcast for live SEC men's matches
// ---------------------------------------------------------------------------

async function checkStatBroadcast() {
  const html = await fetchText('https://www.statbroadcast.com/events/conference.php?id=sec')
  if (!html) return []

  const updates = []
  // Look for live match indicators + scores in the page
  const liveRe = /In Progress/i
  if (!liveRe.test(html)) return []

  // Extract team + score lines near "In Progress"
  const lines = html.split('\n')
  for (let i = 0; i < lines.length; i++) {
    if (/In Progress/i.test(lines[i])) {
      // Grab a window of surrounding lines for context
      const window = lines.slice(Math.max(0, i - 10), i + 10).join(' ')
      const scoreRe = /(\w[\w\s]+?)\s+(\d)\s*[,|]\s*(\w[\w\s]+?)\s+(\d)/
      const m = window.match(scoreRe)
      if (m) {
        updates.push({ team1: m[1].trim(), score1: parseInt(m[2]), team2: m[3].trim(), score2: parseInt(m[4]) })
      }
    }
  }
  return updates
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function run() {
  console.log(`[${new Date().toISOString()}] CourtSide scraper starting...`)
  const today = todayString()
  console.log(`Today: ${today}`)

  // Fetch all four pages in parallel
  const [menScheduleHtml, womenScheduleHtml, menRankingsHtml, womenRankingsHtml] = await Promise.all([
    fetchText('https://www.collegetennisranks.com/schedules/weekbehind/d1'),
    fetchText('https://www.collegetennisranks.com/schedules/weekbehind/d1w'),
    fetchText('https://www.collegetennisranks.com/rankings/current/d1'),
    fetchText('https://www.collegetennisranks.com/rankings/current/d1w'),
  ])

  // Parse
  const menMatches = parseSchedulePage(menScheduleHtml, 'men')
  const womenMatches = parseSchedulePage(womenScheduleHtml, 'women')
  const menRankings = parseRankingsPage(menRankingsHtml, 'men')
  const womenRankings = parseRankingsPage(womenRankingsHtml, 'women')

  console.log(`Parsed: ${menMatches.length} men's matches, ${womenMatches.length} women's matches`)
  console.log(`Parsed: ${menRankings.length} men's rankings, ${womenRankings.length} women's rankings`)

  // Upsert matches — only insert new ones we don't already have
  let inserted = 0
  for (const m of [...menMatches, ...womenMatches]) {
    try {
      const { rows } = await pool.query(`SELECT id FROM matches WHERE id = $1`, [m.id])
      if (rows.length === 0) {
        await upsertMatch(m)
        inserted++
      } else {
        // Update score if match already exists (status/score may have changed)
        await upsertMatch(m)
      }
    } catch (err) {
      console.warn(`Failed to upsert match ${m.id}:`, err.message)
    }
  }
  console.log(`Upserted ${inserted} new matches`)

  // Update rankings if we got enough rows
  if (menRankings.length >= 20) await upsertRankings(menRankings, 'men')
  if (womenRankings.length >= 20) await upsertRankings(womenRankings, 'women')

  // Check StatBroadcast for any live SEC matches and update status
  const liveUpdates = await checkStatBroadcast()
  if (liveUpdates.length) {
    console.log(`Found ${liveUpdates.length} live SEC matches on StatBroadcast`)
    for (const u of liveUpdates) {
      await pool.query(
        `UPDATE matches SET status = 'live', updated_at = NOW()
         WHERE gender = 'men' AND match_date = $1
           AND (home_name ILIKE $2 OR away_name ILIKE $2)`,
        [today, `%${u.team1}%`]
      )
    }
  }

  console.log(`[${new Date().toISOString()}] Scraper done.`)
  await pool.end()
}

run().catch(err => {
  console.error('Scraper failed:', err)
  process.exit(1)
})
