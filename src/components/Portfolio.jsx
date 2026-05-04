const projects = [
  { title:'SaaS Analytics Platform', desc:'Enterprise-style dashboard for monitoring growth, retention, and customer behavior across multiple channels.', tags:['Dashboard','Data UI','Performance'], grad:'linear-gradient(135deg,rgba(79,140,255,0.18),rgba(138,92,255,0.2))' },
  { title:'Startup Marketing Site', desc:'Conversion-led company site with premium visuals, responsive storytelling, and fast-loading front-end execution.', tags:['Brand site','SEO','Responsive'], grad:'linear-gradient(135deg,rgba(138,92,255,0.2),rgba(79,140,255,0.12))' },
  { title:'B2B Operations Portal', desc:'Internal tools experience focused on clarity, workflow speed, and architecture ready for future product expansion.', tags:['Portal','Workflow','Scalable'], grad:'linear-gradient(135deg,rgba(79,140,255,0.16),rgba(10,15,28,0.16))' },
  { title:'High-Performance Landing', desc:'Reusable design and section framework crafted for startups that need faster launches with premium visual consistency.', tags:['System','Reusable','Launch-ready'], grad:'linear-gradient(135deg,rgba(10,15,28,0.16),rgba(138,92,255,0.24))' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{padding:'clamp(4rem,10vw,6rem) 0'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.05,letterSpacing:'-0.04em',maxWidth:'16ch',marginTop:'var(--space-4)'}}>A compact portfolio with a modern product lens.</h2>
          </div>
          <p style={{maxWidth:'52ch',color:'var(--color-text-muted)',marginTop:0}}>Project cards are intentionally clean so the work feels structured, credible, and current.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map(p => (
            <article key={p.title} className="glass-card">
              <div style={{aspectRatio:'16/9',borderRadius:18,overflow:'hidden',position:'relative',background:p.grad,border:'1px solid rgba(255,255,255,0.06)',marginBottom:'var(--space-5)'}}>
                <div style={{position:'absolute',inset:'12% 10% auto',height:'52%',background:'rgba(10,15,28,0.82)',borderRadius:16,boxShadow:'0 12px 32px rgba(10,15,28,0.24)'}}/>
                <div style={{position:'absolute',inset:'auto 12% 12% 24%',height:'28%',background:'rgba(248,250,252,0.9)',borderRadius:14,boxShadow:'0 6px 18px rgba(79,140,255,0.12)'}}/>
              </div>
              <h3 style={{fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>{p.title}</h3>
              <p style={{marginTop:'var(--space-3)',color:'var(--color-text-muted)'}}>{p.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-2)',marginTop:'var(--space-4)'}}>
                {p.tags.map(t => <span key={t} style={{display:'inline-flex',alignItems:'center',minHeight:28,padding:'0.3rem 0.7rem',borderRadius:'var(--radius-full)',background:'color-mix(in srgb,var(--color-surface-2) 70%,var(--color-accent-start) 30%)',color:'var(--color-text-muted)',fontSize:'var(--text-xs)',border:'1px solid color-mix(in srgb,var(--color-accent-border) 80%,transparent)'}}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .portfolio-grid{display:grid;gap:var(--space-4);}
        @media(min-width:768px){.portfolio-grid{grid-template-columns:repeat(2,1fr);}}
      `}</style>
    </section>
  )
}