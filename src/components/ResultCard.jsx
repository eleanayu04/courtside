import { Link } from 'react-router-dom'

export default function ResultCard({ result }) {
  const { homeTeam, awayTeam, teamScore, round, date, winner, resultsUrl } = result

  const card = (
    <div className="bg-court-card rounded-xl border border-white/5 overflow-hidden hover:border-court-accent/30 transition-all hover:shadow-lg hover:shadow-court-accent/5">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">{round}</span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <div className="px-4 py-3 space-y-2">
        <div className={`flex items-center justify-between ${winner === 'home' ? '' : 'opacity-60'}`}>
          <div className="flex items-center gap-3">
            <span className="text-xl">{homeTeam.logo}</span>
            <div>
              <span className={`font-semibold ${winner === 'home' ? 'text-white' : 'text-gray-400'}`}>
                {homeTeam.rank && <span className="text-gray-500 text-xs mr-1">#{homeTeam.rank}</span>}
                {homeTeam.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-extrabold tabular-nums ${winner === 'home' ? 'text-white' : 'text-gray-500'}`}>
              {teamScore.home}
            </span>
            {winner === 'home' && <span className="text-court-gold text-xs font-bold">W</span>}
          </div>
        </div>
        <div className={`flex items-center justify-between ${winner === 'away' ? '' : 'opacity-60'}`}>
          <div className="flex items-center gap-3">
            <span className="text-xl">{awayTeam.logo}</span>
            <div>
              <span className={`font-semibold ${winner === 'away' ? 'text-white' : 'text-gray-400'}`}>
                {awayTeam.rank && <span className="text-gray-500 text-xs mr-1">#{awayTeam.rank}</span>}
                {awayTeam.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-2xl font-extrabold tabular-nums ${winner === 'away' ? 'text-white' : 'text-gray-500'}`}>
              {teamScore.away}
            </span>
            {winner === 'away' && <span className="text-court-gold text-xs font-bold">W</span>}
          </div>
        </div>
      </div>
    </div>
  )

  if (resultsUrl) {
    return <a href={resultsUrl} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
  }
  return <Link to={`/match/${result.id}`} className="block">{card}</Link>
}
