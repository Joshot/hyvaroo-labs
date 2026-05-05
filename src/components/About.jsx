export default function About() {
  return (
    <>
      <style>{`
        .about-section{
          padding:clamp(5rem,10vw,9rem) 0;
          background:#0c0a06;
          border-top:1px solid rgba(184,150,90,0.1);
        }
        .about-grid{display:grid;gap:5rem;align-items:center}
        @media(min-width:960px){.about-grid{grid-template-columns:1fr 1fr}}
        .about-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,1.2rem + 3.5vw,5rem);
          font-weight:300;line-height:0.95;color:#faf8f3;
        }
        .about-h2 em{font-style:italic}
        .about-lead{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(1rem,0.9rem + 0.4vw,1.2rem);
          color:rgba(232,224,208,0.65);
          font-weight:300;line-height:1.85;max-width:48ch;
        }
        .about-body{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.92rem;
          color:rgba(232,224,208,0.4);
          line-height:1.85;max-width:48ch;
        }
        .about-right{
          display:grid;gap:1px;
          background:rgba(184,150,90,0.08);
          border:1px solid rgba(184,150,90,0.1);
          border-radius:24px;overflow:hidden;
        }
        @media(min-width:480px){.about-right{grid-template-columns:1fr 1fr}}
        .about-cell{
          padding:2rem 1.75rem;
          background:#0f0d08;
          display:flex;flex-direction:column;gap:0.4rem;
          transition:background 250ms;
        }
        .about-cell:hover{background:#141009}
        .about-cell-val{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.5rem,1rem + 1.5vw,2.5rem);
          font-weight:600;line-height:1;
          background:linear-gradient(135deg,#faf8f3,#d4aa6a);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .about-cell-label{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.8rem;font-weight:600;
          color:rgba(232,224,208,0.8);
        }
        .about-cell-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.7rem;
          color:rgba(184,150,90,0.4);
          line-height:1.5;
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="wrap">
          <div className="about-grid">
            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              <span className="eyebrow">About Hyvaroo Labs</span>
              <h2 className="about-h2">Built to push<br/><em>businesses forward.</em></h2>
              <span className="gold-line"/>
              <p className="about-lead">
                Hyvaroo Labs is a technology-focused software house dedicated to building scalable,
                high-performance digital products for companies that refuse mediocrity.
              </p>
              <p className="about-body">
                The name blends <em style={{color:'rgba(232,224,208,0.6)'}}>high value</em> and{' '}
                <em style={{color:'rgba(232,224,208,0.6)'}}>route</em> — every engagement is structured
                as a clear, disciplined path toward better products and measurable outcomes.
                We are a small, elite team with enterprise-grade standards.
              </p>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{alignSelf:'flex-start',marginTop:'0.5rem'}}>
                Work with us
              </a>
            </div>
            <div className="about-right">
              {[
                {v:'100%',l:'Client Satisfaction',s:'Measured on every project'},
                {v:'Fast',l:'Time to Market',s:'Scoped for launch velocity'},
                {v:'Elite',l:'Engineering Standards',s:'No shortcuts, ever'},
                {v:'Scale',l:'Architecture First',s:'Built to grow without rewrites'},
                {v:'Global',l:'Design Language',s:'Tuned for world-class products'},
                {v:'24/7',l:'We Think About Your Product',s:'Ownership beyond office hours'},
              ].map(({v,l,s})=>(
                <div key={l} className="about-cell">
                  <span className="about-cell-val">{v}</span>
                  <strong className="about-cell-label">{l}</strong>
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
