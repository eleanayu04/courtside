import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import pg from 'pg';
import { migrate } from './db/migrate.js';
import { seed } from './db/seed.js';

const { Pool } = pg;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// ---------------------------------------------------------------------------
// Startup: migrate then seed (only if rankings table is empty)
// ---------------------------------------------------------------------------

async function startup() {
  await migrate();

  const { rows } = await pool.query(`SELECT COUNT(*) AS count FROM rankings`);
  const isEmpty = parseInt(rows[0].count, 10) === 0;
  if (isEmpty) {
    await seed(pool);
  } else {
    console.log('Rankings table already populated — skipping seed.');
  }
}

// ---------------------------------------------------------------------------
// API routes
// ---------------------------------------------------------------------------

// GET /api/matches?gender=men|women&view=today|recent
app.get('/api/matches', async (req, res) => {
  const { gender, view } = req.query;

  if (!gender || !['men', 'women'].includes(gender)) {
    return res.status(400).json({ error: 'gender must be "men" or "women"' });
  }
  if (!view || !['today', 'recent'].includes(view)) {
    return res.status(400).json({ error: 'view must be "today" or "recent"' });
  }

  try {
    let rows;

    if (view === 'today') {
      // Build today's date string in the same format used in the DB: "Apr 16, 2026"
      const now = new Date();
      const todayStr = now.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });

      ({ rows } = await pool.query(
        `SELECT * FROM matches
         WHERE gender = $1
           AND match_date = $2
         ORDER BY updated_at ASC`,
        [gender, todayStr]
      ));
    } else {
      // recent: final matches from the past 7 days
      // match_date is stored as text ("Apr 12, 2026"), so we cast to date for comparison.
      ({ rows } = await pool.query(
        `SELECT * FROM matches
         WHERE gender = $1
           AND status = 'final'
           AND TO_DATE(match_date, 'Mon DD, YYYY') >= CURRENT_DATE - INTERVAL '7 days'
         ORDER BY TO_DATE(match_date, 'Mon DD, YYYY') DESC`,
        [gender]
      ));
    }

    res.json(rows);
  } catch (err) {
    console.error('GET /api/matches error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/matches/:id
app.get('/api/matches/:id', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM matches WHERE id = $1`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Match not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/matches/:id error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/rankings?gender=men|women
app.get('/api/rankings', async (req, res) => {
  const { gender } = req.query;

  if (!gender || !['men', 'women'].includes(gender)) {
    return res.status(400).json({ error: 'gender must be "men" or "women"' });
  }

  try {
    const { rows } = await pool.query(
      `SELECT * FROM rankings
       WHERE gender = $1
       ORDER BY rank ASC`,
      [gender]
    );
    res.json(rows);
  } catch (err) {
    console.error('GET /api/rankings error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ---------------------------------------------------------------------------
// Static files — Vite build
// ---------------------------------------------------------------------------

const distPath = join(__dirname, 'dist');
app.use(express.static(distPath));

// Client-side routing fallback
app.get('*', (_req, res) => {
  res.sendFile(join(distPath, 'index.html'));
});

// ---------------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------------

startup()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`CourtSide server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Startup failed:', err);
    process.exit(1);
  });
