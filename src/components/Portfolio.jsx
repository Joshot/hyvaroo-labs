const work = [
  {n:'01',title:'SaaS Analytics Platform',   cat:'Dashboard · Data UI',   year:'2025',desc:'Enterprise dashboard with real-time metrics, custom charting, and multi-tenant architecture built for a B2B analytics startup.'},
  {n:'02',title:'Startup Marketing Site',    cat:'Brand · SEO · Motion',  year:'2025',desc:'Conversion-focused company site with editorial layout, premium motion, and performance scores in the top 5% globally.'},
  {n:'03',title:'B2B Operations Portal',     cat:'Portal · Workflow',     year:'2024',desc:'Internal operations tool for a logistics company — role-based access, real-time updates, and a clean data-dense UI.'},
  {n:'04',title:'E-Commerce Experience',    cat:'E-Commerce · UX',       year:'2024',desc:'Premium shopping experience with editorial product presentation, seamless checkout, and mobile-first interaction design.'},
]

export default function Portfolio() {
  return (
    <section id="portfolio" style={{padding:'clamp(5rem,10vw,8rem) 0',background:'var(--ivory-warm)',borderTop:'1px solid var(--ivory-border)'}}>
      <div className="wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'var(--sp-8)',marginBottom:'var(--sp-16)'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)'}}>
            <span className="eyebrow">Selected Work</span>
            <h2 style={{fontSize:'var(--tx-xl)',fontWeight:300,maxWidth:'13ch'}}>Work that<br/><em>speaks for itself.</em></h2>
          </div>
          <span className="gold-rule" style={{margin:0,width:64}}/>
        </div>

        <div style={{display:'grid',gap:'var(--sp-3)'}}>
          {work.map(({n,title,cat,year,desc},i) => (
            <div key={title} className="port-row" style={{display:'grid',gap:'var(--sp-5)',padding:'var(--sp-8)',borderRadius:'var(--r-lg)',border:'1px solid var(--ivory-border)',background:'var(--ivory)',transition:'all var(--t) var(--ease)',cursor:'default'}}>
              <div style={{display:'grid',alignItems:'start'}} className="port-inner">
                <div style={{display:'flex',alignItems:'baseline',gap:'var(--sp-4)'}}>
                  <span style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-xs)',color:'var(--gold)',fontWeight:600,letterSpacing:'0.1em',minWidth:24}}>{n}</span>
                  <div>
                    <h3 style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-lg)',fontWeight:400,lineHeight:1.1}}>{title}</h3>
                    <p style={{color:'var(--text-3)',fontSize:'var(--tx-xs)',marginTop:'var(--sp-1)',letterSpacing:'0.06em',textTransform:'uppercase',fontWeight:600}}>{cat} · {year}</p>
                  </div>
                </div>
                <p style={{color:'var(--text-2)',fontSize:'var(--tx-base)',maxWidth:'56ch'}}>{desc}</p>
              </div>
              {/* Visual swatch */}
              <div style={{height:3,borderRadius:'var(--r-full)',background:`linear-gradient(90deg, var(--gold-light), var(--gold-deep), var(--ivory-deep))`,opacity: 0.7+i*0.08}} />
            </div>
          ))}
        </div>
      </div>
      <style>{`.port-row:hover{background:var(--ivory-warm)!important;box-shadow:0 8px 40px rgba(26,22,16,0.06),0 1px 0 rgba(184,150,90,0.2)!important;transform:translateY(-2px);}.port-inner{gap:var(--sp-4);}@media(min-width:900px){.port-inner{grid-template-columns:1fr 1fr;}}`}</style>
    </section>
  )
}