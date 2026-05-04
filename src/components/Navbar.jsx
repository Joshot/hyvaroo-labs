import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header style={{
      position:'sticky',top:0,zIndex:50,
      backdropFilter:'blur(18px)',
      background: scrolled
        ? 'color-mix(in srgb, var(--color-bg) 85%, transparent)'
        : 'color-mix(in srgb, var(--color-bg) 60%, transparent)',
      borderBottom:'1px solid color-mix(in srgb, var(--color-border) 85%, transparent)',
      transition:'background var(--transition)',
    }}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div style={{minHeight:78,display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--space-4)'}}>

          {/* Brand */}
          <a href="#top" style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',fontWeight:800,letterSpacing:'-0.03em',color:'var(--color-text)'}}>
            <span style={{display:'flex',flexDirection:'column',lineHeight:1.05}}>
              <span style={{background:'var(--gradient-accent)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Hyvaroo Labs</span>
              <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-xs)',fontWeight:500,letterSpacing:'0.06em',textTransform:'uppercase',WebkitTextFillColor:'var(--color-text-muted)'}}>Software House</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav style={{display:'none',gap:'var(--space-6)',alignItems:'center'}} className="desktop-nav">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)',fontWeight:500,transition:'color var(--transition)'}} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* Actions */}
          <div style={{display:'flex',alignItems:'center',gap:'var(--space-3)'}}>
            <button onClick={onToggleTheme} aria-label="Toggle theme" style={{width:44,height:44,display:'inline-grid',placeItems:'center',borderRadius:14,border:'1px solid var(--color-border)',background:'var(--color-surface)',color:'var(--color-text)'}}>
              {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer"
              style={{minHeight:44,padding:'0.7rem 1.2rem',display:'inline-flex',alignItems:'center',gap:6,borderRadius:'var(--radius-full)',fontSize:'var(--text-sm)',fontWeight:700,background:'var(--gradient-accent)',color:'white',border:'none'}} className="hide-mobile">
              Let's Talk
            </a>
            <button onClick={() => setMobileOpen(v => !v)} aria-label="Toggle menu"
              style={{width:44,height:44,display:'inline-grid',placeItems:'center',borderRadius:14,border:'1px solid var(--color-border)',background:'var(--color-surface)',color:'var(--color-text)'}} className="mobile-menu-btn">
              {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav style={{display:'grid',gap:'var(--space-3)',paddingBottom:'var(--space-4)'}}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                style={{padding:'0.85rem 1rem',borderRadius:'var(--radius-md)',background:'var(--color-surface)',border:'1px solid var(--color-border)',color:'var(--color-text)'}}>
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <style>{`
        @media(min-width:980px){.desktop-nav{display:flex!important;}.mobile-menu-btn{display:none!important;}.hide-mobile{display:inline-flex!important;}}
        @media(max-width:979px){.desktop-nav{display:none!important;}.hide-mobile{display:none!important;}}
        .nav-link:hover{color:var(--color-text)!important;}
      `}</style>
    </header>
  )
}