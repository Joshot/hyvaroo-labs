const work = [
  { n:'01', title:'SaaS Analytics Platform', cat:'Dashboard / Data UI', year:'2025', color:'rgba(99,179,237,0.08)', desc:'Enterprise dashboard with real-time metrics, custom charting, and multi-tenant architecture built for a B2B analytics startup.' },
  { n:'02', title:'Startup Marketing Site', cat:'Brand / SEO / Motion', year:'2025', color:'rgba(154,230,180,0.08)', desc:'Conversion-focused company site with editorial layout, premium motion, and Lighthouse scores in the top 5% globally.' },
  { n:'03', title:'B2B Operations Portal', cat:'Portal / Workflow', year:'2024', color:'rgba(246,173,85,0.08)', desc:'Internal operations tool for a logistics company: role-based access, real-time updates, and a clean data-dense UI.' },
  { n:'04', title:'E-Commerce Experience', cat:'E-Commerce / UX', year:'2024', color:'rgba(214,158,246,0.08)', desc:'Premium shopping experience with editorial product presentation, seamless checkout, and mobile-first interaction design.' },
]

export default function Portfolio() {
  return (
    <>
      <style>{`
        .port-section{
          padding:clamp(5rem,10vw,9rem) 0;
          background:#0f0d08;
          border-top:1px solid rgba(184,150,90,0.1);
        }
        .port-header{
          display:flex;flex-direction:column;gap:1rem;
          margin-bottom:5rem;
        }
        .port-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,1.2rem + 3.5vw,5rem);
          font-weight:300;line-height:0.95;color:#faf8f3;
        }
        .port-h2 em{font-style:italic}
        .port-list{display:flex;flex-direction:column;gap:1px;border:1px solid rgba(184,150,90,0.1);border-radius:24px;overflow:hidden}
        .port-row{
          display:grid;gap:1.5rem;
          padding:clamp(2rem,4vw,3rem);
          background:#100e09;
          transition:background 300ms;
          cursor:default;
          border-bottom:1px solid rgba(184,150,90,0.06);
          position:relative;overflow:hidden;
        }
        .port-row:last-child{border-bottom:none}
        .port-row::before{
          content:'';position:absolute;inset:0;
          opacity:0;transition:opacity 400ms;
        }
        .port-row-inner{display:grid;gap:1rem;align-items:start}
        .port-num{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;
          letter-spacing:0.1em;color:rgba(184,150,90,0.4);
          min-width:20px;
        }
        .port-title{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.4rem,1rem + 1.4vw,2.2rem);
          font-weight:300;color:#faf8f3;line-height:1.05;
        }
        .port-cat{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;letter-spacing:0.1em;
          text-transform:uppercase;color:rgba(184,150,90,0.5);
          margin-top:4px;
        }
        .port-desc{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;color:rgba(232,224,208,0.5);line-height:1.78;
        }
        .port-bar{height:1px;background:linear-gradient(90deg,#b8965a,#d4aa6a,rgba(184,150,90,0.1))}
        @media(min-width:900px){
          .port-row-inner{grid-template-columns:1fr 1fr}
          .port-row:hover{background:#141009}
        }
      `}</style>

      <section id="portfolio" className="port-section">
        <div className="wrap">
          <div className="port-header">
            <span className="eyebrow">Selected Work</span>
            <h2 className="port-h2">Work that<br/><em>speaks for itself.</em></h2>
            <span className="gold-line"/>
          </div>
          <div className="port-list">
            {work.map(({n,title,cat,year,desc,color})=>(
              <div key={title} className="port-row" style={{'--hover-bg':color}}>
                <div className="port-row-inner">
                  <div>
                    <div style={{display:'flex',alignItems:'baseline',gap:'0.75rem'}}>
                      <span className="port-num">{n}</span>
                      <div>
                        <h3 className="port-title">{title}</h3>
                        <p className="port-cat">{cat} &middot; {year}</p>
                      </div>
                    </div>
                  </div>
                  <p className="port-desc">{desc}</p>
                </div>
                <div className="port-bar"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
