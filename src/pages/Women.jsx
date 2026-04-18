import { useApi } from '../hooks/useApi'
import { normalizeMatch } from '../utils/normalizeMatch'
import LiveMatchCard from '../components/LiveMatchCard'
import ResultCard from '../components/ResultCard'
import { Spinner, ErrorMsg } from '../components/LoadingState'

export default function Women() {
  const { data: rows, loading, error } = useApi('/api/matches?gender=women&view=today')

  if (loading) return <Spinner />
  if (error) return <ErrorMsg message={error} />

  const matches = (rows || []).map(normalizeMatch)
  const live      = matches.filter(m => m.status === 'live')
  const scheduled = matches.filter(m => m.status === 'scheduled')
  const completed = matches.filter(m => m.status === 'final')

  const today = new Date().toLocaleDateString('en-US', {
    timeZone: 'America/New_York', month: 'short', day: 'numeric', year: 'numeric',
  })

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">Today's Matches</h1>
        <p className="text-sm text-gray-400 mt-0.5">{today} — D1 Women's Tennis</p>
      </div>

      {live.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />
            <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">In Progress — {live.length}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {live.map(m => <LiveMatchCard key={m.id} match={m} />)}
          </div>
        </div>
      )}

      {scheduled.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Upcoming — {scheduled.length}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {scheduled.map(m => <LiveMatchCard key={m.id} match={m} />)}
          </div>
        </div>
      )}

      {completed.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Completed — {completed.length}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {completed.map(m => <ResultCard key={m.id} result={m} />)}
          </div>
        </div>
      )}

      {matches.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <div className="text-5xl mb-4">🎾</div>
          <p className="text-lg font-semibold">No matches today</p>
          <p className="text-sm mt-1">Check back soon or view recent results</p>
        </div>
      )}
    </div>
  )
}
