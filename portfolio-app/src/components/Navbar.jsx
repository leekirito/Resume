import { useState, useEffect } from 'react'

export default function Navbar({ projectilesOn, onToggleProjectiles }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Home',     href: '#home' },
    { label: 'Skills',   href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About',    href: '#about' },
  ]

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <div className="nav-logo">
            H.M. Lee Jr<span className="dot">.</span>
          </div>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.label}>
                <a href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href) }}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <button
                className="nav-cta projectile-toggle"
                onClick={onToggleProjectiles}
                title={projectilesOn ? 'Disable game mode' : 'Enable game mode'}
                style={{
                  background: projectilesOn ? 'rgba(99,102,241,0.2)' : 'transparent',
                  border: '1px solid ' + (projectilesOn ? 'var(--accent)' : 'var(--border)'),
                  color: projectilesOn ? 'var(--accent2)' : 'var(--muted)',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '99px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  fontFamily: 'inherit',
                }}
              >
                {projectilesOn ? '⏹ Game Off' : '▶ Game Mode'}
              </button>
            </li>
            <li>
              <a
                href="https://github.com/leekirito"
                target="_blank"
                rel="noreferrer"
                className="nav-cta"
              >
                GitHub ↗
              </a>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} onClick={e => { e.preventDefault(); handleNav(l.href) }}>
            {l.label}
          </a>
        ))}
        <button
          onClick={() => { onToggleProjectiles(); setMenuOpen(false) }}
          style={{
            background: 'none', border: 'none', textAlign: 'left',
            fontSize: '1.1rem', fontWeight: 500, color: projectilesOn ? 'var(--accent2)' : 'var(--muted)',
            cursor: 'pointer', fontFamily: 'inherit', padding: 0,
          }}
        >
          {projectilesOn ? '⏹ Disable Game Mode' : '▶ Enable Game Mode'}
        </button>
        <a href="https://github.com/leekirito" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </>
  )
}
