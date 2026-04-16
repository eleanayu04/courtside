import { womenRecentResults } from '../data/womenData'
import ResultCard from '../components/ResultCard'

export default function WomenResults() {
  const grouped = womenRecentResults.reduce((acc, result) => {
    if (!acc[result.date]) acc[result.date] = []
    acc[result.date].push(result)
    return acc
  }, {})

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">Women's Results</h1>
        <p className="text-sm text-gray-400 mt-0.5">D1 Women's Tennis · via collegetennisranks.com</p>
      </div>

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
