import { womenStandings } from '../data/womenData'
import StandingsTable from '../components/StandingsTable'

export default function WomenRankings() {
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-2xl font-extrabold">ITA Women's Rankings</h1>
        <p className="text-sm text-gray-400 mt-0.5">2025-26 Division I Women's Tennis · via collegetennisranks.com</p>
      </div>
      <StandingsTable standings={womenStandings} />
    </div>
  )
}
