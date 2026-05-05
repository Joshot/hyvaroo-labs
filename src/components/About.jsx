export default function About(){
  return(
    <>
      <style>{`
        .about-section{padding:clamp(5rem,10vw,9rem) 0;background:#fefcf8}
        .about-grid{display:grid;gap:5rem;align-items:center}
        @media(min-width:960px){.about-grid{grid-template-columns:1fr 1fr}}
        .about-h2{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(2.2rem,1.2rem + 3vw,4.8rem);font-weight:300;line-height:0.94;color:#111}
        .about-h2 em{font-style:italic;color:#f43f5e}
        .about-eyebrow{font-family:'DM Sans',system-ui,sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#f43f5e}
        .about-lead{font-family:'DM Sans',system-ui,sans-serif;font-size:clamp(0.95rem,0.88rem + 0.3vw,1.1rem);color:rgba(17,17,17,0.55);font-weight:300;line-height:1.85;max-width:48ch}
        .about-body{font-family:'DM Sans',system-ui,sans-serif;font-size:0.92rem;color:rgba(17,17,17,0.4);line-height:1.85;max-width:48ch}
        .about-cells{display:grid;grid-template-columns:1fr 1fr;gap:1px;border-radius:24px;overflow:hidden;border:1.5px solid rgba(0,0,0,0.06);background:rgba(0,0,0,0.04)}
        .about-cell{
          padding:1.75rem;
          background:#fff;
          display:flex;flex-direction:column;gap:0.35rem;
          transition:background 220ms;
        }
        .about-cell:hover{background:#fefcf8}
        .about-cell-val{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.5rem,1rem + 1.2vw,2.3rem);font-weight:600;line-height:1}
        .about-cell-lbl{font-family:'DM Sans',system-ui,sans-serif;font-size:0.8rem;font-weight:600;color:#111}
        .about-cell-sub{font-family:'DM Sans',system-ui,sans-serif;font-size:0.68rem;color:rgba(17,17,17,0.35);line-height:1.5}
      `}</style>
      <section id="about" className="about-section">
        <div className="wrap">
          <div className="about-grid">
            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              <p className="about-eyebrow">About Hyvaroo Labs</p>
              <h2 className="about-h2">Built to push<br/><em>businesses forward.</em></h2>
              <p className="about-lead">Hyvaroo Labs is a technology-focused software house dedicated to building scalable, high-performance digital products for companies that refuse mediocrity.</p>
              <p className="about-body">The name blends <em style={{color:'#111',fontStyle:'italic'}}>high value</em> and <em style={{color:'#111',fontStyle:'italic'}}>route</em> — every engagement is structured as a clear, disciplined path toward better products and measurable outcomes. We are a small, elite team with enterprise-grade standards.</p>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',alignSelf:'flex-start',marginTop:'0.5rem',minHeight:'48px',padding:'0 1.75rem',borderRadius:'9999px',background:'#f43f5e',color:'#fff',fontFamily:'DM Sans,system-ui,sans-serif',fontSize:'0.78rem',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',textDecoration:'none',transition:'all 220ms',boxShadow:'0 4px 20px rgba(244,63,94,0.3)'}}>
                Work With Us
              </a>
            </div>
            <div className="about-cells">
              {[
                {v:'100%',l:'Client Satisfaction',s:'Measured on every project',c:'#ff6b35'},
                {v:'Fast',l:'Time to Market',s:'Scoped for launch velocity',c:'#4338ca'},
                {v:'Elite',l:'Engineering Standards',s:'No shortcuts, ever',c:'#10b981'},
                {v:'Scale',l:'Architecture First',s:'Built to grow without rewrites',c:'#f59e0b'},
                {v:'Global',l:'Design Language',s:'Tuned for world-class products',c:'#0ea5e9'},
                {v:'24/7',l:'Full Ownership',s:'Beyond office hours',c:'#f43f5e'},
              ].map(({v,l,s,c})=>(
                <div key={l} className="about-cell">
                  <span className="about-cell-val" style={{color:c}}>{v}</span>
                  <strong className="about-cell-lbl">{l}</strong>
                  <span className="about-cell-sub">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
