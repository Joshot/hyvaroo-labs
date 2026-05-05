import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  {href:'#services',label:'Services'},
  {href:'#portfolio',label:'Portfolio'},
  {href:'#process',label:'Process'},
  {href:'#about',label:'About'},
  {href:'#contact',label:'Contact'},
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
          transition:all 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .nav.up{
          background:rgba(254,252,248,0.95);
          backdrop-filter:blur(20px);
          border-bottom:1px solid rgba(0,0,0,0.06);
          box-shadow:0 2px 20px rgba(0,0,0,0.04);
        }
        .nav-inner{
          width:min(calc(100% - 3rem),1200px);
          margin-inline:auto;
          display:flex;align-items:center;justify-content:space-between;
          min-height:76px;
        }
        .nav-logo{display:flex;align-items:center;gap:0.6rem;text-decoration:none}
        .nav-logo-badge{
          width:36px;height:36px;border-radius:10px;
          background:linear-gradient(135deg,#ff6b35,#f59e0b);
          display:flex;align-items:center;justify-content:center;
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1rem;font-weight:700;color:#fff;
          flex-shrink:0;
        }
        .nav-logo-text{display:flex;flex-direction:column;line-height:1.1}
        .nav-logo-name{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1.1rem;font-weight:600;letter-spacing:-0.01em;color:#111;
        }
        .nav-logo-sub{
          font-size:0.58rem;font-weight:600;letter-spacing:0.16em;
          text-transform:uppercase;color:#ff6b35;
          font-family:'DM Sans',system-ui,sans-serif;
        }
        .nav-links{display:none;align-items:center;gap:2.25rem;list-style:none}
        .nav-links a{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.84rem;font-weight:500;color:rgba(17,17,17,0.6);
          transition:color 180ms;position:relative;
        }
        .nav-links a:hover{color:#ff6b35}
        .nav-cta{
          display:none;align-items:center;justify-content:center;
          min-height:40px;padding:0 1.4rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.76rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:#111;color:#fff;text-decoration:none;
          transition:all 220ms;
        }
        .nav-cta:hover{background:#ff6b35;transform:translateY(-1px);box-shadow:0 6px 24px rgba(255,107,53,0.3)}
        .nav-ham{
          width:42px;height:42px;
          display:none;align-items:center;justify-content:center;
          border-radius:10px;border:1.5px solid rgba(0,0,0,0.1);
          background:#fff;color:#111;
          box-shadow:0 2px 8px rgba(0,0,0,0.06);
        }
        .mob-menu{
          position:fixed;inset:0;top:76px;
          background:rgba(254,252,248,0.98);
          backdrop-filter:blur(30px);
          padding:2rem 1.5rem 3rem;
          display:flex;flex-direction:column;
          border-top:1px solid rgba(0,0,0,0.06);
          z-index:499;
        }
        .mob-lnk{
          display:block;padding:1rem 0;
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:2.2rem;font-weight:300;color:#111;
          border-bottom:1px solid rgba(0,0,0,0.06);
          transition:color 180ms,padding-left 180ms;
          text-decoration:none;
        }
        .mob-lnk:hover{color:#ff6b35;padding-left:8px}
        .mob-cta{
          display:flex;align-items:center;justify-content:center;
          margin-top:2rem;min-height:52px;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:#111;color:#fff;text-decoration:none;
        }
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
      <header className={`nav${scrolled?' up':''}`}>
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <div className="nav-logo-badge">H</div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">Hyvaroo Labs</span>
              <span className="nav-logo-sub">Software House</span>
            </div>
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
              <a key={l.href} href={l.href} className="mob-lnk" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="mob-cta">Let&#39;s Talk</a>
          </div>
        )}
      </header>
    </>
  )
}
