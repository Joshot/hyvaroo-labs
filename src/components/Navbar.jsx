import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services',  label: 'Services'  },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#manifesto', label: 'About'     },
  { href: '#why-us',    label: 'Why Us'    },
  { href: '#contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 200;
          transition: background 400ms, border-color 400ms, backdrop-filter 400ms;
        }
        .nav.scrolled {
          background: rgba(8,7,10,0.82);
          backdrop-filter: blur(24px) saturate(1.6);
          -webkit-backdrop-filter: blur(24px) saturate(1.6);
          border-bottom: 1px solid rgba(201,169,110,0.12);
        }
        .nav-inner {
          width: min(calc(100% - 2.5rem), 1100px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .nav-logo { text-decoration: none; display: flex; flex-direction: column; line-height: 1.1; }
        .nav-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 0.9rem + 0.4vw, 1.3rem);
          font-weight: 600;
          letter-spacing: 0.02em;
          color: #f0ede8;
        }
        .nav-sub {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c9a96e;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: 2.5rem;
        }
        .nav-links a {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: rgba(240,237,232,0.65);
          text-decoration: none;
          transition: color 200ms;
          position: relative;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0; right: 0;
          height: 1px;
          background: #c9a96e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 250ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-links a:hover { color: #f0ede8; }
        .nav-links a:hover::after { transform: scaleX(1); }
        .nav-cta {
          display: none;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 0 1.4rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: linear-gradient(135deg, #c9a96e, #a07840);
          color: #08070a;
          text-decoration: none;
          transition: transform 200ms, box-shadow 200ms;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(201,169,110,0.35);
        }
        .hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 4px;
          border: 1px solid rgba(240,237,232,0.15);
          color: #f0ede8;
        }
        .mob-nav {
          background: rgba(8,7,10,0.97);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(201,169,110,0.12);
          padding: 1rem 1.25rem 1.5rem;
        }
        .mob-link {
          display: block;
          padding: 1rem 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.6rem;
          font-weight: 300;
          color: rgba(240,237,232,0.8);
          text-decoration: none;
          border-bottom: 1px solid rgba(240,237,232,0.06);
          transition: color 200ms;
        }
        .mob-link:hover { color: #c9a96e; }
        @media (min-width: 900px) {
          .nav-links { display: flex !important; }
          .nav-cta   { display: inline-flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>

      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="nav-name">Hyvaroo Labs</span>
            <span className="nav-sub">Software House</span>
          </a>
          <nav aria-label="primary">
            <ul className="nav-links">
              {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </nav>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="nav-cta">Let&apos;s Talk</a>
            <button className="hamburger" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mob-nav">
            {links.map(l => (
              <a key={l.href} href={l.href} className="mob-link" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-glow" style={{ marginTop:'1.25rem', width:'100%', justifyContent:'center' }}>Let&apos;s Talk</a>
          </div>
        )}
      </header>
    </>
  )
}
