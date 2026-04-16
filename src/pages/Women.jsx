import { womenLiveMatches, womenTodayResults } from '../data/womenData'
import LiveMatchCard from '../components/LiveMatchCard'
import ResultCard from '../components/ResultCard'

export default function Women() {
  const live = womenLiveMatches.filter((m) => m.status === 'live')
  const scheduled = womenLiveMatches.filter((m) => m.status === 'scheduled')

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-extrabold">Today's Matches</h1>
          <p className="text-sm text-gray-400 mt-0.5">Apr 15, 2026 — D1 Women's Tennis</p>
        </div>
      </div>

      {/* Live now */}
      {live.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">In Progress — {live.length}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {live.map((match) => (
              <LiveMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Scheduled */}
      {scheduled.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Upcoming — {scheduled.length}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {scheduled.map((match) => (
              <LiveMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      )}

      {/* Completed today */}
      {womenTodayResults.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Completed — {womenTodayResults.length}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {womenTodayResults.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      )}

      {live.length === 0 && scheduled.length === 0 && womenTodayResults.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <div className="text-5xl mb-4">🎾</div>
          <p className="text-lg font-semibold">No matches today</p>
          <p className="text-sm mt-1">Check back soon or view recent results</p>
        </div>
      )}
    </div>
  )
}
