export default function About() {
  return (
    <section id="about" style={{padding:'clamp(5rem,10vw,8rem) 0',borderTop:'1px solid var(--ivory-border)'}}>
      <div className="wrap">
        <div className="about-grid">

          {/* Left column */}
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
            <span className="eyebrow">About Hyvaroo Labs</span>
            <h2 style={{fontSize:'var(--tx-xl)',fontWeight:300,lineHeight:1.0}}>Built to move<br/><em>businesses forward.</em></h2>
            <span className="gold-rule"/>
            <p style={{color:'var(--text-2)',fontSize:'var(--tx-md)',fontWeight:300,lineHeight:1.85,maxWidth:'48ch'}}>
              Hyvaroo Labs is a technology-focused software house dedicated to building scalable and high-performance digital products for companies that demand excellence.
            </p>
            <p style={{color:'var(--text-3)',fontSize:'var(--tx-base)',maxWidth:'48ch',lineHeight:1.8}}>
              The name is rooted in <em>high value</em> and <em>route</em> — every engagement is structured as a clear path toward better products, better systems, and measurable growth.
            </p>
          </div>

          {/* Right column — stat grid */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--sp-4)'}}>
            {[
              {stat:'100%',label:'Client satisfaction',sub:'Every project delivered to spec'},
              {stat:'Fast',label:'Time to market',sub:'Scoped for launch velocity'},
              {stat:'Global',label:'Design standard',sub:'Aligned to worldwide product UI'},
              {stat:'Scale',label:'Architecture first',sub:'Built to grow without rebuilds'},
            ].map(({stat,label,sub}) => (
              <div key={label} style={{padding:'var(--sp-6)',border:'1px solid var(--ivory-border)',borderRadius:'var(--r-lg)',background:'var(--ivory-warm)',display:'flex',flexDirection:'column',gap:'var(--sp-2)'}}>
                <span style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-lg)',fontWeight:600,color:'var(--text)',lineHeight:1}}>{stat}</span>
                <strong style={{fontFamily:'var(--f-body)',fontSize:'var(--tx-sm)',fontWeight:600,color:'var(--text)'}}>{label}</strong>
                <span style={{fontSize:'var(--tx-xs)',color:'var(--text-3)',lineHeight:1.5}}>{sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
      <style>{`.about-grid{display:grid;gap:var(--sp-16);align-items:start;}@media(min-width:900px){.about-grid{grid-template-columns:1.1fr 0.9fr;}}`}</style>
    </section>
  )
}