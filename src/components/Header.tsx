import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#222] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#c9a84c] rounded-sm flex items-center justify-center font-black text-black text-sm">
              MP
            </div>
            <span className="font-black text-xl tracking-tight text-white">
              Mine<span className="text-[#c9a84c]">Prut</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-[#888] hover:text-[#c9a84c] transition-colors"
              activeProps={{ className: 'text-sm font-medium text-[#c9a84c]' }}
            >
              Produse
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-[#888] hover:text-[#c9a84c] transition-colors"
              activeProps={{ className: 'text-sm font-medium text-[#c9a84c]' }}
            >
              Despre Noi
            </Link>
            <Link
              to="/size-chart"
              className="text-sm font-medium text-[#888] hover:text-[#c9a84c] transition-colors"
              activeProps={{ className: 'text-sm font-medium text-[#c9a84c]' }}
            >
              Mărimi
            </Link>
            <Link
              to="/math-behind"
              className="text-sm font-medium text-[#888] hover:text-[#c9a84c] transition-colors"
              activeProps={{ className: 'text-sm font-medium text-[#c9a84c]' }}
            >
              The Math Behind
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-[#c9a84c] text-black text-sm font-bold rounded hover:bg-[#e8c97a] transition-colors"
            >
              Înregistrare
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#888] hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#222] bg-[#0a0a0a]">
          <div className="px-4 py-4 flex flex-col gap-4">
            {[
              { to: '/', label: 'Produse' },
              { to: '/about', label: 'Despre Noi' },
              { to: '/size-chart', label: 'Mărimi' },
              { to: '/math-behind', label: 'The Math Behind' },
              { to: '/register', label: 'Înregistrare' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-[#888] hover:text-[#c9a84c] font-medium transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
