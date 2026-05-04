import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    {href:'#services',label:'Services'},
    {href:'#portfolio',label:'Portfolio'},
    {href:'#about',label:'About'},
    {href:'#why-us',label:'Why Us'},
    {href:'#contact',label:'Contact'},
  ]

  return (
    <header style={{
      position:'sticky',top:0,zIndex:100,
      background: scrolled ? 'rgba(250,248,243,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
      borderBottom: scrolled ? '1px solid var(--ivory-border)' : '1px solid transparent',
      transition:'all 300ms var(--ease)',
    }}>
      <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:72}}>

        {/* Logo */}
        <a href="#top" style={{display:'flex',flexDirection:'column',lineHeight:1.1}}>
          <span style={{fontFamily:'var(--f-display)',fontSize:'clamp(1.1rem,1rem+0.5vw,1.4rem)',fontWeight:600,letterSpacing:'-0.01em',color:'var(--text)'}}>Hyvaroo Labs</span>
          <span style={{fontFamily:'var(--f-body)',fontSize:'var(--tx-xs)',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)'}}>Software House</span>
        </a>

        {/* Desktop nav */}
        <nav style={{display:'none',gap:'var(--sp-8)',alignItems:'center'}} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{fontFamily:'var(--f-body)',fontSize:'var(--tx-sm)',fontWeight:500,letterSpacing:'0.04em',color:'var(--text-2)',transition:'color var(--t)'}} className="nav-lnk">{l.label}</a>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)'}}>
          <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary hide-sm" style={{minHeight:42,padding:'0 1.4rem',fontSize:'var(--tx-xs)'}}>
            Let's Talk
          </a>
          <button onClick={() => setOpen(v=>!v)} className="mob-btn" aria-label="menu" style={{width:44,height:44,display:'none',placeItems:'center',borderRadius:var("--r-md"),border:'1px solid var(--ivory-border)',background:'var(--ivory-warm)'}}>
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div style={{background:'var(--ivory)',borderTop:'1px solid var(--ivory-border)',padding:'var(--sp-4) var(--sp-6) var(--sp-6)'}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)} style={{display:'block',padding:'var(--sp-3) 0',fontFamily:'var(--f-body)',fontSize:'var(--tx-md)',borderBottom:'1px solid var(--ivory-border)',color:'var(--text)'}}>{l.label}</a>
          ))}
          <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{marginTop:'var(--sp-5)',width:'100%',justifyContent:'center'}}>Let's Talk</a>
        </div>
      )}

      <style>{`
        @media(min-width:900px){.nav-desktop{display:flex!important;}.mob-btn{display:none!important;}.hide-sm{display:inline-flex!important;}}
        @media(max-width:899px){.nav-desktop{display:none!important;}.mob-btn{display:inline-grid!important;}.hide-sm{display:none!important;}}
        .nav-lnk:hover{color:var(--gold-deep)!important;}
      `}</style>
    </header>
  )
}