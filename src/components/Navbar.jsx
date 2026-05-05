import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href:'#services', label:'Services' },
  { href:'#portfolio', label:'Portfolio' },
  { href:'#process', label:'Process' },
  { href:'#about', label:'About' },
  { href:'#contact', label:'Contact' },
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
        .nav{
          position:fixed;top:0;left:0;right:0;z-index:500;
          transition:all 350ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav.scrolled{
          background:rgba(12,10,6,0.85);
          backdrop-filter:blur(24px) saturate(1.5);
          border-bottom:1px solid rgba(184,150,90,0.15);
        }
        .nav-inner{
          width:min(calc(100% - 3rem),1200px);
          margin-inline:auto;
          display:flex;align-items:center;justify-content:space-between;
          min-height:80px;
        }
        .nav-logo{display:flex;flex-direction:column;line-height:1;gap:2px}
        .nav-logo-name{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.1rem,1rem + 0.4vw,1.35rem);
          font-weight:600;letter-spacing:-0.01em;
          background:linear-gradient(135deg,#faf8f3,#d4aa6a);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .nav-logo-sub{
          font-size:0.6rem;font-weight:600;letter-spacing:0.18em;
          text-transform:uppercase;color:#b8965a;
          font-family:'DM Sans',system-ui,sans-serif;
        }
        .nav-links{display:none;align-items:center;gap:2.5rem;list-style:none}
        .nav-links a{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:500;letter-spacing:0.04em;
          color:rgba(232,224,208,0.7);transition:color 200ms;position:relative;
        }
        .nav-links a::after{
          content:'';position:absolute;bottom:-4px;left:0;width:0;height:1px;
          background:#b8965a;transition:width 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav-links a:hover{color:#d4aa6a}
        .nav-links a:hover::after{width:100%}
        .nav-cta{
          display:none;align-items:center;justify-content:center;
          min-height:40px;padding:0 1.5rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.72rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
          background:linear-gradient(135deg,#b8965a,#d4aa6a);
          color:#0c0a06;text-decoration:none;
          transition:all 250ms;box-shadow:0 2px 16px rgba(184,150,90,0.25);
        }
        .nav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 28px rgba(184,150,90,0.4)}
        .nav-ham{
          width:44px;height:44px;
          display:none;align-items:center;justify-content:center;
          border-radius:10px;border:1px solid rgba(184,150,90,0.25);
          background:rgba(184,150,90,0.07);color:#e8e0d0;
        }
        .mob-menu{
          position:fixed;inset:0;top:80px;z-index:499;
          background:rgba(12,10,6,0.97);
          backdrop-filter:blur(40px);
          padding:2rem 1.5rem 3rem;
          display:flex;flex-direction:column;gap:0;
          border-top:1px solid rgba(184,150,90,0.12);
        }
        .mob-link{
          display:block;padding:1.1rem 0;
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:2rem;font-weight:300;
          color:rgba(232,224,208,0.8);
          border-bottom:1px solid rgba(184,150,90,0.1);
          transition:color 200ms,padding-left 200ms;
        }
        .mob-link:hover{color:#d4aa6a;padding-left:8px}
        @media(min-width:900px){
          .nav-links{display:flex!important}
          .nav-cta{display:inline-flex!important}
          .nav-ham{display:none!important}
        }
        @media(max-width:899px){
          .nav-links,.nav-cta{display:none!important}
          .nav-ham{display:inline-flex!important}
        }
      `}</style>

      <header className={`nav${scrolled?' scrolled':''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="nav-logo-name">Hyvaroo Labs</span>
            <span className="nav-logo-sub">Software House</span>
          </a>
          <nav><ul className="nav-links">{links.map(l=><li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul></nav>
          <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="nav-cta">Let&#39;s Talk</a>
            <button className="nav-ham" onClick={()=>setOpen(v=>!v)} aria-label="menu">
              {open?<X size={18}/>:<Menu size={18}/>}
            </button>
          </div>
        </div>
        {open&&(
          <div className="mob-menu">
            {links.map(l=>(
              <a key={l.href} href={l.href} className="mob-link" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{marginTop:'2rem',justifyContent:'center'}}>Let&#39;s Talk</a>
          </div>
        )}
      </header>
    </>
  )
}
