import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const links = [
    { to: '/', label: 'Live', icon: '🔴' },
    { to: '/results', label: 'Results', icon: '📊' },
    { to: '/rankings', label: 'Rankings', icon: '🏆' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-court-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="text-2xl">🎾</span>
            <span className="text-lg font-extrabold tracking-tight">
              COURT<span className="text-court-accent">SIDE</span>
            </span>
          </NavLink>

          <div className="flex items-center gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-court-surface text-white tab-active'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
