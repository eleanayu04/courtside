import { Link } from 'react-router-dom'

function StatusBadge({ status, startTime }) {
  if (status === 'live') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-bold text-court-live">
        <span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />
        LIVE
      </span>
    )
  }
  if (status === 'scheduled') {
    return (
      <span className="text-xs font-semibold text-court-gold">
        {startTime}
      </span>
    )
  }
  if (status === 'final') {
    return <span className="text-xs font-bold text-gray-400">FINAL</span>
  }
  return null
}

export default function LiveMatchCard({ match }) {
  const { homeTeam, awayTeam, teamScore, round, singlesMatches, status, startTime, statsUrl } = match
  const isScheduled = status === 'scheduled'

  const card = (
    <div className={`bg-court-card rounded-xl border border-white/5 hover:border-court-accent/30 transition-all hover:shadow-lg hover:shadow-court-accent/5 ${isScheduled ? 'opacity-75' : ''}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {round}
        </span>
        <StatusBadge status={status} startTime={startTime} />
      </div>

      {/* Team Scores */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{homeTeam.logo}</span>
            <div>
              <div className="font-bold text-base">
                {homeTeam.rank && <span className="text-gray-500 text-xs mr-1.5">#{homeTeam.rank}</span>}
                {homeTeam.name}
              </div>
              <div className="text-xs text-gray-500">{homeTeam.record}</div>
            </div>
          </div>
          {!isScheduled && (
            <span className={`text-3xl font-extrabold tabular-nums ${teamScore.home > teamScore.away ? 'text-white' : 'text-gray-500'}`}>
              {teamScore.home}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{awayTeam.logo}</span>
            <div>
              <div className="font-bold text-base">
                {awayTeam.rank && <span className="text-gray-500 text-xs mr-1.5">#{awayTeam.rank}</span>}
                {awayTeam.name}
              </div>
              <div className="text-xs text-gray-500">{awayTeam.record}</div>
            </div>
          </div>
          {!isScheduled && (
            <span className={`text-3xl font-extrabold tabular-nums ${teamScore.away > teamScore.home ? 'text-white' : 'text-gray-500'}`}>
              {teamScore.away}
            </span>
          )}
        </div>
      </div>

      {/* Singles breakdown — only show if there are matches */}
      {singlesMatches.length > 0 && (
        <div className="px-4 pb-3 pt-1 border-t border-white/5">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-semibold">Singles</div>
          <div className="divide-y divide-white/5">
            {singlesMatches.slice(0, 3).map((m, i) => (
              <SinglesRow key={i} match={m} />
            ))}
          </div>
          {singlesMatches.length > 3 && (
            <div className="text-xs text-gray-500 text-center mt-1">
              +{singlesMatches.length - 3} more courts →
            </div>
          )}
        </div>
      )}

      {/* Stats link for live matches */}
      {statsUrl && status === 'live' && (
        <div className="px-4 pb-3 pt-1 border-t border-white/5">
          <span className="text-xs text-court-accent">View live scoring →</span>
        </div>
      )}
    </div>
  )

  if (statsUrl && status === 'live') {
    return (
      <a href={statsUrl} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    )
  }

  return (
    <Link to={`/match/${match.id}`} className="block">
      {card}
    </Link>
  )
}

function SetScore({ sets, serving, currentGame, status }) {
  return (
    <div className="flex items-center gap-1.5">
      {sets.map((set, i) => (
        <span key={i} className="w-6 text-center text-sm font-mono font-bold">
          {set}
        </span>
      ))}
      {status === 'live' && currentGame !== null && (
        <span className="w-8 text-center text-sm font-mono text-court-gold font-bold bg-court-gold/10 rounded px-1">
          {currentGame}
        </span>
      )}
      {serving && (
        <span className="text-[10px] text-court-gold animate-serve">●</span>
      )}
    </div>
  )
}

function SinglesRow({ match }) {
  const homeScores = match.sets.map((s) => s.home)
  const awayScores = match.sets.map((s) => s.away)

  return (
    <div className={`grid grid-cols-[1fr_auto] gap-2 py-1.5 text-sm ${match.status === 'final' ? 'opacity-70' : ''}`}>
      <div className="space-y-0.5">
        <div className={`flex items-center gap-2 ${match.winner === 'home' ? 'font-bold' : ''}`}>
          <span className="truncate">{match.home}</span>
        </div>
        <div className={`flex items-center gap-2 ${match.winner === 'away' ? 'font-bold' : ''}`}>
          <span className="truncate">{match.away}</span>
        </div>
      </div>
      <div className="space-y-0.5 text-right">
        <SetScore
          sets={homeScores}
          serving={match.serving === 'home'}
          currentGame={match.currentGame?.home ?? null}
          status={match.status}
        />
        <SetScore
          sets={awayScores}
          serving={match.serving === 'away'}
          currentGame={match.currentGame?.away ?? null}
          status={match.status}
        />
      </div>
    </div>
  )
}
