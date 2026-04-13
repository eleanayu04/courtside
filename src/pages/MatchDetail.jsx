import { useParams, Link } from 'react-router-dom'
import { liveMatches } from '../data/mockData'

function CourtStatus({ status }) {
  if (status === 'live') return <span className="flex items-center gap-1 text-xs font-bold text-court-live"><span className="w-1.5 h-1.5 bg-court-live rounded-full animate-pulse-live" />LIVE</span>
  if (status === 'final') return <span className="text-xs font-bold text-gray-400">FINAL</span>
  if (status === 'warmup') return <span className="text-xs font-bold text-court-gold">WARM-UP</span>
  return null
}

export default function MatchDetail() {
  const { id } = useParams()
  const match = liveMatches.find((m) => m.id === id)

  if (!match) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400">Match not found</p>
        <Link to="/" className="text-court-accent text-sm mt-2 inline-block">Back to live</Link>
      </div>
    )
  }

  const { homeTeam, awayTeam, teamScore, round, singlesMatches, doublesResults, startTime } = match

  return (
    <div>
      <Link to="/" className="text-sm text-gray-400 hover:text-white mb-4 inline-flex items-center gap-1">
        ← Back to Live
      </Link>

      {/* Match header */}
      <div className="bg-court-card rounded-xl border border-white/5 p-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{round}</span>
            <span className="text-xs text-gray-500 ml-3">{startTime}</span>
          </div>
          <span className="flex items-center gap-1.5 text-xs font-bold text-court-live">
            <span className="w-2 h-2 bg-court-live rounded-full animate-pulse-live" />
            LIVE
          </span>
        </div>

        <div className="flex items-center justify-around">
          <div className="text-center">
            <span className="text-4xl block mb-2">{homeTeam.logo}</span>
            <div className="font-extrabold text-lg">{homeTeam.name}</div>
            <div className="text-xs text-gray-500">#{homeTeam.rank} · {homeTeam.record}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-4">
              <span className={`text-5xl font-black tabular-nums ${teamScore.home >= teamScore.away ? 'text-white' : 'text-gray-500'}`}>
                {teamScore.home}
              </span>
              <span className="text-gray-600 text-2xl">-</span>
              <span className={`text-5xl font-black tabular-nums ${teamScore.away >= teamScore.home ? 'text-white' : 'text-gray-500'}`}>
                {teamScore.away}
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">First to 4</div>
          </div>
          <div className="text-center">
            <span className="text-4xl block mb-2">{awayTeam.logo}</span>
            <div className="font-extrabold text-lg">{awayTeam.name}</div>
            <div className="text-xs text-gray-500">#{awayTeam.rank} · {awayTeam.record}</div>
          </div>
        </div>
      </div>

      {/* Doubles */}
      {doublesResults.length > 0 && (
        <div className="bg-court-card rounded-xl border border-white/5 p-4 mb-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Doubles</h3>
          <div className="space-y-2">
            {doublesResults.map((d, i) => (
              <div key={i} className="flex items-center justify-between text-sm py-1.5 border-b border-white/5 last:border-0">
                <div className="flex-1">
                  <span className={d.winner === 'home' ? 'font-bold' : 'text-gray-400'}>{d.home}</span>
                </div>
                <span className="text-xs font-mono text-gray-400 px-3">{d.score}</span>
                <div className="flex-1 text-right">
                  <span className={d.winner === 'away' ? 'font-bold' : 'text-gray-400'}>{d.away}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Singles */}
      <div className="bg-court-card rounded-xl border border-white/5 p-4">
        <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-3">Singles</h3>
        <div className="space-y-1">
          {singlesMatches.map((m, i) => (
            <div key={i} className={`rounded-lg p-3 ${m.status === 'live' ? 'bg-white/5' : ''}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500 font-medium">Court {m.court}</span>
                <CourtStatus status={m.status} />
              </div>
              <div className="space-y-1">
                {/* Home player */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {m.serving === 'home' && <span className="text-[10px] text-court-gold animate-serve">●</span>}
                    <span className={`text-sm ${m.winner === 'home' ? 'font-bold' : ''} ${m.winner === 'away' ? 'text-gray-500' : ''}`}>
                      {m.home}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {m.sets.map((s, j) => (
                      <span key={j} className={`w-7 text-center text-sm font-mono font-bold ${
                        s.home > s.away ? 'text-white' : 'text-gray-500'
                      }`}>
                        {s.home}
                      </span>
                    ))}
                    {m.status === 'live' && m.currentGame && (
                      <span className="w-8 text-center text-sm font-mono font-bold text-court-gold bg-court-gold/10 rounded">
                        {m.currentGame.home}
                      </span>
                    )}
                    {m.winner === 'home' && <span className="text-court-gold text-xs font-bold ml-1">W</span>}
                  </div>
                </div>
                {/* Away player */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {m.serving === 'away' && <span className="text-[10px] text-court-gold animate-serve">●</span>}
                    <span className={`text-sm ${m.winner === 'away' ? 'font-bold' : ''} ${m.winner === 'home' ? 'text-gray-500' : ''}`}>
                      {m.away}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {m.sets.map((s, j) => (
                      <span key={j} className={`w-7 text-center text-sm font-mono font-bold ${
                        s.away > s.home ? 'text-white' : 'text-gray-500'
                      }`}>
                        {s.away}
                      </span>
                    ))}
                    {m.status === 'live' && m.currentGame && (
                      <span className="w-8 text-center text-sm font-mono font-bold text-court-gold bg-court-gold/10 rounded">
                        {m.currentGame.away}
                      </span>
                    )}
                    {m.winner === 'away' && <span className="text-court-gold text-xs font-bold ml-1">W</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
