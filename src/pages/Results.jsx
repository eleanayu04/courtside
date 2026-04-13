import { recentResults } from '../data/mockData'
import ResultCard from '../components/ResultCard'

export default function Results() {
  const grouped = recentResults.reduce((acc, result) => {
    if (!acc[result.date]) acc[result.date] = []
    acc[result.date].push(result)
    return acc
  }, {})

  return (
    <div>
      <h1 className="text-2xl font-extrabold mb-5">Results</h1>

      {Object.entries(grouped).map(([date, results]) => (
        <div key={date} className="mb-6">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">{date}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {results.map((result) => (
              <ResultCard key={result.id} result={result} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
