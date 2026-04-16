import { NavLink, useLocation } from 'react-router-dom'

const menLinks = [
  { to: '/',         label: 'Live',     icon: '🔴' },
  { to: '/results',  label: 'Results',  icon: '📊' },
  { to: '/rankings', label: 'Rankings', icon: '🏆' },
]

const womenLinks = [
  { to: '/women',          label: 'Live',     icon: '🔴' },
  { to: '/women/results',  label: 'Results',  icon: '📊' },
  { to: '/women/rankings', label: 'Rankings', icon: '🏆' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const isWomen = pathname.startsWith('/women')
  const links = isWomen ? womenLinks : menLinks

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

          <div className="flex items-center gap-3">
            {/* Men / Women toggle */}
            <div className="flex items-center bg-white/5 rounded-lg p-0.5 text-xs font-bold">
              <NavLink
                to="/"
                className={`px-3 py-1.5 rounded-md transition-all ${!isWomen ? 'bg-court-surface text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Men
              </NavLink>
              <NavLink
                to="/women"
                className={`px-3 py-1.5 rounded-md transition-all ${isWomen ? 'bg-court-surface text-white' : 'text-gray-400 hover:text-white'}`}
              >
                Women
              </NavLink>
            </div>

            {/* Section links */}
            <div className="flex items-center gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/' || link.to === '/women'}
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
      </div>
    </nav>
  )
}
