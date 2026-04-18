/** Convert a flat DB row into the shape that LiveMatchCard / ResultCard expect */
export function normalizeMatch(row) {
  return {
    id: row.id,
    status: row.status,
    round: row.round,
    date: row.match_date,
    startTime: row.start_time,
    statsUrl: row.stats_url,
    resultsUrl: row.results_url,
    teamScore: { home: row.home_score ?? 0, away: row.away_score ?? 0 },
    winner: row.winner,
    homeTeam: {
      name: row.home_name,
      rank: row.home_rank,
      record: row.home_record,
      logo: row.home_logo || '🎾',
      conference: row.home_conference,
    },
    awayTeam: {
      name: row.away_name,
      rank: row.away_rank,
      record: row.away_record,
      logo: row.away_logo || '🎾',
      conference: row.away_conference,
    },
    singlesMatches: [],
    doublesResults: [],
  }
}

/** Convert a flat DB row into the shape StandingsTable expects */
export function normalizeRanking(row) {
  return {
    rank: row.rank,
    points: parseFloat(row.points),
    team: {
      name: row.team_name,
      conference: row.conference,
      record: row.record,
      logo: '🎾',
    },
  }
}
