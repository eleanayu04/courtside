import { liveMatches } from '../data/mockData'
import LiveMatchCard from '../components/LiveMatchCard'

export default function Live() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-2xl font-extrabold">Live Matches</h1>
          <p className="text-sm text-gray-400 mt-0.5">{liveMatches.length} matches in progress</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />
          Auto-updating
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {liveMatches.map((match) => (
          <LiveMatchCard key={match.id} match={match} />
        ))}
      </div>

      {liveMatches.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <div className="text-5xl mb-4">🎾</div>
          <p className="text-lg font-semibold">No live matches right now</p>
          <p className="text-sm mt-1">Check back soon or view recent results</p>
        </div>
      )}
    </div>
  )
}
