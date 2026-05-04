import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services',  label: 'Services'  },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about',     label: 'About'     },
  { href: '#why-us',    label: 'Why Us'    },
  { href: '#contact',   label: 'Contact'   },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-header {
          position: sticky;
          top: 0;
          z-index: 100;
          transition: all 280ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-header.scrolled {
          background: rgba(250,248,243,0.94);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          border-bottom: 1px solid #ddd8ce;
        }
        .nav-header.top {
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .nav-wrap {
          width: min(calc(100% - 3rem), 1080px);
          margin-inline: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 72px;
        }
        .nav-logo {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          text-decoration: none;
        }
        .nav-logo-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.05rem, 1rem + 0.4vw, 1.35rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #1a1610;
        }
        .nav-logo-sub {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8965a;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
        }
        .nav-links a {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #4a4030;
          text-decoration: none;
          transition: color 200ms;
        }
        .nav-links a:hover { color: #8a6a38; }
        .nav-cta {
          display: none;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 1.4rem;
          border-radius: 9999px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: #1a1610;
          color: #faf8f3;
          text-decoration: none;
          border: 1.5px solid #1a1610;
          transition: background 200ms, transform 200ms, box-shadow 200ms;
        }
        .nav-cta:hover {
          background: #8a6a38;
          border-color: #8a6a38;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(184,150,90,0.22);
        }
        .nav-hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          border: 1px solid #ddd8ce;
          background: #f5f0e8;
          cursor: pointer;
          color: #1a1610;
        }
        .mob-menu {
          background: #faf8f3;
          border-top: 1px solid #ddd8ce;
          padding: 1rem 1.5rem 1.5rem;
        }
        .mob-menu a.mob-link {
          display: block;
          padding: 0.75rem 0;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 400;
          border-bottom: 1px solid #ddd8ce;
          color: #1a1610;
          text-decoration: none;
          transition: color 180ms;
        }
        .mob-menu a.mob-link:hover { color: #b8965a; }
        .mob-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1.25rem;
          min-height: 48px;
          border-radius: 9999px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: #1a1610;
          color: #faf8f3;
          text-decoration: none;
        }
        @media (min-width: 900px) {
          .nav-links    { display: flex !important; }
          .nav-cta      { display: inline-flex !important; }
          .nav-hamburger{ display: none !important; }
        }
        @media (max-width: 899px) {
          .nav-links    { display: none !important; }
          .nav-cta      { display: none !important; }
          .nav-hamburger{ display: inline-flex !important; }
        }
      `}</style>

      <header className={`nav-header ${scrolled ? 'scrolled' : 'top'}`}>
        <div className="nav-wrap">

          <a href="#top" className="nav-logo">
            <span className="nav-logo-name">Hyvaroo Labs</span>
            <span className="nav-logo-sub">Software House</span>
          </a>

          <nav aria-label="primary">
            <ul className="nav-links">
              {links.map(l => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
            <a
              href="https://wa.me/6285159611202"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              Let's Talk
            </a>
            <button
              className="nav-hamburger"
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mob-menu">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="mob-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285159611202"
              target="_blank"
              rel="noopener noreferrer"
              className="mob-cta"
            >
              Let's Talk
            </a>
          </div>
        )}
      </header>
    </>
  )
}
