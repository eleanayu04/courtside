import { useApi } from '../hooks/useApi'
import { normalizeRanking } from '../utils/normalizeMatch'
import StandingsTable from '../components/StandingsTable'
import { Spinner, ErrorMsg } from '../components/LoadingState'

export default function WomenRankings() {
  const { data: rows, loading, error } = useApi('/api/rankings?gender=women')

  if (loading) return <Spinner />
  if (error) return <ErrorMsg message={error} />

  const standings = (rows || []).map(normalizeRanking)

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">ITA Women's Rankings</h1>
        <p className="text-sm text-gray-400 mt-0.5">2025-26 Division I Women's Tennis · via collegetennisranks.com</p>
      </div>
      <StandingsTable standings={standings} />
    </div>
  )
}
