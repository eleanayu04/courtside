import { standings } from '../data/mockData'
import StandingsTable from '../components/StandingsTable'

export default function Rankings() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">ITA Team Rankings</h1>
        <p className="text-sm text-gray-400 mt-0.5">2025-26 Division I Men's Tennis · via collegetennisranks.com</p>
      </div>
      <StandingsTable standings={standings} />
    </div>
  )
}
