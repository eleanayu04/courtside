import { useParams, Link } from 'react-router-dom'
import { useApi } from '../hooks/useApi'
import { normalizeMatch } from '../utils/normalizeMatch'
import { Spinner, ErrorMsg } from '../components/LoadingState'

export default function MatchDetail() {
  const { id } = useParams()
  const { data: row, loading, error } = useApi(`/api/matches/${id}`)

  if (loading) return <Spinner />
  if (error) return <ErrorMsg message={error} />

  if (!row) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Match not found</p>
        <Link to="/" className="text-court-accent text-sm mt-2 inline-block">← Back to live</Link>
      </div>
    )
  }

  const match = normalizeMatch(row)
  const { homeTeam, awayTeam, teamScore, round, startTime, date } = match
  const isLive = match.status === 'live'
  const isFinal = match.status === 'final'

  return (
    <div>
      <Link to={-1} className="text-sm text-gray-400 hover:text-white mb-4 inline-flex items-center gap-1">
        ← Back
      </Link>

      {/* Match header */}
      <div className="bg-court-card rounded-xl border border-white/5 p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{round}</span>
            <span className="text-xs text-gray-500 ml-3">{startTime || date}</span>
          </div>
          {isLive
            ? <span className="flex items-center gap-1.5 text-xs font-bold text-court-live"><span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />LIVE</span>
            : isFinal
              ? <span className="text-xs font-bold text-gray-400">FINAL</span>
              : <span className="text-xs font-bold text-court-gold">UPCOMING</span>
          }
        </div>

        <div className="flex items-center justify-around">
          <div className="text-center">
            <span className="text-4xl block mb-2">{homeTeam.logo}</span>
            <div className="font-extrabold text-lg">{homeTeam.name}</div>
            <div className="text-xs text-gray-500">
              {homeTeam.rank ? `#${homeTeam.rank} · ` : ''}{homeTeam.record}
            </div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-4">
              <span className={`text-5xl font-black tabular-nums ${teamScore.home >= teamScore.away ? 'text-white' : 'text-gray-500'}`}>
                {teamScore.home}
              </span>
              <span className="text-gray-600 text-2xl">-</span>
              <span className={`text-5xl font-black tabular-nums ${teamScore.away >= teamScore.home ? 'text-white' : 'text-gray-500'}`}>
                {teamScore.away}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">First to 4</div>
          </div>
          <div className="text-center">
            <span className="text-4xl block mb-2">{awayTeam.logo}</span>
            <div className="font-extrabold text-lg">{awayTeam.name}</div>
            <div className="text-xs text-gray-500">
              {awayTeam.rank ? `#${awayTeam.rank} · ` : ''}{awayTeam.record}
            </div>
          </div>
        </div>
      </div>

      {/* Action links */}
      <div className="flex gap-3">
        {match.resultsUrl && (
          <a
            href={match.resultsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-court-card border border-white/10 hover:border-court-accent rounded-xl p-4 text-center transition-colors group"
          >
            <div className="text-lg mb-1">📋</div>
            <div className="text-sm font-semibold group-hover:text-court-accent transition-colors">Official Results</div>
            <div className="text-xs text-gray-500 mt-0.5">Full match recap</div>
          </a>
        )}
        {match.statsUrl && (
          <a
            href={match.statsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-court-card border border-white/10 hover:border-court-accent rounded-xl p-4 text-center transition-colors group"
          >
            <div className="text-lg mb-1">📊</div>
            <div className="text-sm font-semibold group-hover:text-court-accent transition-colors">Live Stats</div>
            <div className="text-xs text-gray-500 mt-0.5">Court-by-court scores</div>
          </a>
        )}
      </div>

      {!match.resultsUrl && !match.statsUrl && isFinal && (
        <div className="bg-court-card rounded-xl border border-white/5 p-6 text-center text-gray-500 text-sm">
          No recap link available for this match.
        </div>
      )}
    </div>
  )
}
