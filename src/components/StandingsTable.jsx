export default function StandingsTable({ standings }) {
  return (
    <div className="bg-court-card rounded-xl border border-white/5 overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10 text-gray-400 text-xs uppercase tracking-wider">
            <th className="text-left py-3 px-4 w-12">#</th>
            <th className="text-left py-3">Team</th>
            <th className="text-center py-3 px-2">Record</th>
            <th className="text-center py-3 px-2 hidden sm:table-cell">Conf</th>
            <th className="text-center py-3 px-2 hidden sm:table-cell">Points</th>
            <th className="text-center py-3 px-4">Streak</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {standings.map((row) => (
            <tr key={row.rank} className="hover:bg-white/5 transition-colors">
              <td className="py-3 px-4 font-bold text-gray-400">{row.rank}</td>
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{row.team.logo}</span>
                  <div>
                    <div className="font-semibold">{row.team.name}</div>
                    <div className="text-xs text-gray-500">{row.team.conference}</div>
                  </div>
                </div>
              </td>
              <td className="text-center py-3 px-2 font-mono font-semibold">{row.team.record}</td>
              <td className="text-center py-3 px-2 font-mono text-gray-400 hidden sm:table-cell">{row.confRecord}</td>
              <td className="text-center py-3 px-2 font-mono text-gray-400 hidden sm:table-cell">{row.points}</td>
              <td className="text-center py-3 px-4">
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${
                  row.streak.startsWith('W')
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {row.streak}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
