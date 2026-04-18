import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export async function migrate() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS matches (
      id TEXT PRIMARY KEY,
      gender TEXT NOT NULL,
      match_date TEXT NOT NULL,
      round TEXT,
      status TEXT NOT NULL DEFAULT 'scheduled',
      start_time TEXT,
      home_name TEXT NOT NULL,
      home_rank INTEGER,
      home_record TEXT,
      home_logo TEXT,
      home_conference TEXT,
      away_name TEXT NOT NULL,
      away_rank INTEGER,
      away_record TEXT,
      away_logo TEXT,
      away_conference TEXT,
      home_score INTEGER DEFAULT 0,
      away_score INTEGER DEFAULT 0,
      winner TEXT,
      stats_url TEXT,
      results_url TEXT,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS rankings (
      id SERIAL PRIMARY KEY,
      gender TEXT NOT NULL,
      rank INTEGER NOT NULL,
      team_name TEXT NOT NULL,
      conference TEXT,
      record TEXT,
      points NUMERIC,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  console.log('Migration complete.');
}

export default pool;
