const work=[
  {n:'01',title:'SaaS Analytics Platform',cat:'Dashboard / Data UI',year:'2025',c:'#ff6b35',bg:'#fff0eb',desc:'Enterprise dashboard with real-time metrics, custom charting, and multi-tenant architecture for a B2B analytics startup.'},
  {n:'02',title:'Startup Marketing Site',cat:'Brand / SEO / Motion',year:'2025',c:'#4338ca',bg:'#eef2ff',desc:'Conversion-focused company site with editorial layout, premium motion, and Lighthouse scores in the top 5% globally.'},
  {n:'03',title:'B2B Operations Portal',cat:'Portal / Workflow',year:'2024',c:'#10b981',bg:'#ecfdf5',desc:'Internal operations tool for a logistics company: role-based access, real-time updates, and a clean data-dense UI.'},
  {n:'04',title:'E-Commerce Experience',cat:'E-Commerce / UX',year:'2024',c:'#f59e0b',bg:'#fffbeb',desc:'Premium shopping experience with editorial product presentation, seamless checkout, and mobile-first interaction design.'},
]

export default function Portfolio(){
  return(
    <>
      <style>{`
        .port-section{padding:clamp(5rem,10vw,9rem) 0;background:#fefcf8}
        .port-header{display:flex;flex-direction:column;gap:1rem;margin-bottom:4.5rem}
        .port-h2{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(2.2rem,1.2rem + 3vw,4.8rem);font-weight:300;line-height:0.94;color:#111}
        .port-h2 em{font-style:italic;color:#4338ca}
        .port-eyebrow{font-family:'DM Sans',system-ui,sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#4338ca}
        .port-list{display:grid;gap:1.25rem}
        .port-card{
          display:grid;gap:1.5rem;
          padding:2rem 2.25rem;
          border-radius:20px;
          background:#fff;
          border-left:4px solid;
          box-shadow:0 2px 12px rgba(0,0,0,0.04);
          transition:all 280ms cubic-bezier(0.16,1,0.3,1);
          cursor:default;
        }
        .port-card:hover{transform:translateX(6px);box-shadow:0 12px 40px rgba(0,0,0,0.08)}
        .port-card-inner{display:grid;gap:1rem;align-items:start}
        @media(min-width:900px){.port-card-inner{grid-template-columns:1fr 1fr}}
        .port-n{font-family:'DM Sans',system-ui,sans-serif;font-size:0.65rem;font-weight:600;letter-spacing:0.1em;min-width:20px}
        .port-title{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.35rem,1rem + 1.2vw,2rem);font-weight:400;color:#111;line-height:1.05}
        .port-meta{font-family:'DM Sans',system-ui,sans-serif;font-size:0.65rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:rgba(17,17,17,0.35);margin-top:3px}
        .port-desc{font-family:'DM Sans',system-ui,sans-serif;font-size:0.9rem;color:rgba(17,17,17,0.5);line-height:1.78}
        .port-tag{
          display:inline-flex;align-items:center;gap:0.4rem;
          padding:0.3rem 0.8rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
          width:fit-content;
        }
      `}</style>
      <section id="portfolio" className="port-section">
        <div className="wrap">
          <div className="port-header">
            <p className="port-eyebrow">Selected Work</p>
            <h2 className="port-h2">Work that<br/><em>speaks for itself.</em></h2>
          </div>
          <div className="port-list">
            {work.map(({n,title,cat,year,c,bg,desc})=>(
              <div key={title} className="port-card" style={{borderLeftColor:c}}>
                <div className="port-card-inner">
                  <div>
                    <div style={{display:'flex',alignItems:'baseline',gap:'0.7rem'}}>
                      <span className="port-n" style={{color:c}}>{n}</span>
                      <div>
                        <h3 className="port-title">{title}</h3>
                        <p className="port-meta">{cat} &middot; {year}</p>
                      </div>
                    </div>
                    <span className="port-tag" style={{background:bg,color:c,marginTop:'0.75rem'}}>{cat.split('/')[0].trim()}</span>
                  </div>
                  <p className="port-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
