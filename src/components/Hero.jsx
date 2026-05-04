import { ArrowUpRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section style={{padding:'clamp(5rem,14vw,8rem) 0 clamp(4rem,10vw,6rem)'}} id="top">
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div className="hero-grid">
          <div>
            <span style={{display:'inline-flex',alignItems:'center',gap:'var(--space-2)',padding:'0.45rem 0.85rem',borderRadius:'var(--radius-full)',background:'color-mix(in srgb,var(--color-surface) 84%,var(--color-accent-start) 16%)',border:'1px solid var(--color-accent-border)',color:'var(--color-text)',fontSize:'var(--text-xs)',letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:700}}>
              High-value digital growth
            </span>
            <h1 style={{fontSize:'var(--text-3xl)',lineHeight:0.97,letterSpacing:'-0.05em',marginTop:'var(--space-5)',maxWidth:'11ch'}}>
              Building <span style={{background:'var(--gradient-accent)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Premium</span> Digital Products
            </h1>
            <p style={{marginTop:'var(--space-6)',maxWidth:'52ch',color:'var(--color-text-muted)',fontSize:'var(--text-lg)'}}>
              We help startups and companies scale faster through high-performance web applications built with clarity, speed, and modern product standards.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-3)',marginTop:'var(--space-8)'}}>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer"
                style={{minHeight:52,padding:'0.9rem 1.4rem',display:'inline-flex',alignItems:'center',gap:6,borderRadius:'var(--radius-full)',fontSize:'var(--text-sm)',fontWeight:700,background:'var(--gradient-accent)',color:'white',boxShadow:'var(--shadow-lg)',textDecoration:'none'}}>
                <ArrowUpRight size={18}/>Start a Project
              </a>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer"
                style={{minHeight:52,padding:'0.9rem 1.4rem',display:'inline-flex',alignItems:'center',gap:6,borderRadius:'var(--radius-full)',fontSize:'var(--text-sm)',fontWeight:700,background:'var(--color-surface)',color:'var(--color-text)',border:'1px solid var(--color-border)',textDecoration:'none'}}>
                <MessageCircle size={18}/>Chat on WhatsApp
              </a>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-4)',marginTop:'var(--space-8)',color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>
              <span>⚡ Scalable architecture</span>
              <span>🎯 Performance-first</span>
              <span>✨ Global startup aesthetic</span>
            </div>
          </div>

          <div className="hero-card">
            <div style={{position:'relative',zIndex:1,display:'grid',gap:'var(--space-5)'}}>
              <div style={{padding:'var(--space-5)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 88%,transparent)',border:'1px solid var(--color-border)'}}>
                <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>What we deliver</span>
                <strong style={{display:'block',marginTop:'0.45rem',fontSize:'var(--text-lg)',letterSpacing:'-0.03em',lineHeight:1.2}}>High-value technology with clear forward direction.</strong>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'var(--space-4)'}}>
                <div style={{padding:'var(--space-5)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 88%,transparent)',border:'1px solid var(--color-border)'}}>
                  <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>Delivery</span>
                  <strong style={{display:'block',fontSize:'var(--text-xl)',letterSpacing:'-0.04em',background:'var(--gradient-accent)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Fast</strong>
                </div>
                <div style={{padding:'var(--space-5)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 88%,transparent)',border:'1px solid var(--color-border)'}}>
                  <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>Quality</span>
                  <strong style={{display:'block',fontSize:'var(--text-xl)',letterSpacing:'-0.04em',background:'var(--gradient-accent)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Premium</strong>
                </div>
                <div style={{gridColumn:'span 2',padding:'var(--space-5)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 88%,transparent)',border:'1px solid var(--color-border)'}}>
                  <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>Systems</span>
                  <strong style={{display:'block',fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>Scale-ready from day one</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid{display:grid;gap:var(--space-10);align-items:center;}
        .hero-card{position:relative;overflow:hidden;padding:clamp(1.5rem,4vw,2rem);border-radius:28px;background:linear-gradient(180deg,color-mix(in srgb,var(--color-surface) 88%,transparent),color-mix(in srgb,var(--color-surface-2) 94%,transparent));border:1px solid color-mix(in srgb,var(--color-accent-border) 80%,var(--color-border));box-shadow:var(--shadow-md);min-height:340px;}
        .hero-card::before{content:"";position:absolute;inset:auto -10% -28% auto;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,rgba(138,92,255,0.35),transparent 65%);filter:blur(10px);}
        @media(min-width:980px){.hero-grid{grid-template-columns:1.15fr 0.85fr;}}
      `}</style>
    </section>
  )
}