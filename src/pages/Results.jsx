import { useApi } from '../hooks/useApi'
import { normalizeMatch } from '../utils/normalizeMatch'
import ResultCard from '../components/ResultCard'
import { Spinner, ErrorMsg } from '../components/LoadingState'

export default function Results() {
  const { data: rows, loading, error } = useApi('/api/matches?gender=men&view=recent')

  if (loading) return <Spinner />
  if (error) return <ErrorMsg message={error} />

  const matches = (rows || []).map(normalizeMatch)

  const grouped = matches.reduce((acc, m) => {
    const key = m.date || 'Unknown'
    if (!acc[key]) acc[key] = []
    acc[key].push(m)
    return acc
  }, {})

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">Results</h1>
        <p className="text-sm text-gray-400 mt-0.5">D1 Men's Tennis · via collegetennisranks.com</p>
      </div>

      {Object.entries(grouped).map(([date, results]) => (
        <div key={date} className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{date}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {results.map(r => <ResultCard key={r.id} result={r} />)}
          </div>
        </div>
      ))}

      {matches.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p>No recent results found</p>
        </div>
      )}
    </div>
  )
}
