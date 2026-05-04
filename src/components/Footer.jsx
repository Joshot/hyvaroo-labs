export default function Footer() {
  return (
    <footer style={{background:'var(--text)',color:'var(--ivory)',padding:'clamp(3rem,6vw,5rem) 0 clamp(2rem,4vw,3rem)'}}>
      <div className="wrap">
        <div className="footer-grid">
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-5)'}}>
            <div>
              <div style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-lg)',fontWeight:600,letterSpacing:'-0.01em',color:'var(--ivory)'}}>Hyvaroo Labs</div>
              <div style={{fontFamily:'var(--f-body)',fontSize:'var(--tx-xs)',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--gold)',marginTop:4}}>Software House</div>
            </div>
            <p style={{color:'rgba(250,248,243,0.55)',fontSize:'var(--tx-sm)',maxWidth:'34ch',lineHeight:1.75}}>Premium digital products for companies that demand more than ordinary execution.</p>
          </div>

          <div style={{display:'grid',gap:'var(--sp-3)'}}>
            <strong style={{fontSize:'var(--tx-xs)',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)'}}>Navigation</strong>
            {['#services','#portfolio','#about','#why-us','#contact'].map(h => (
              <a key={h} href={h} style={{color:'rgba(250,248,243,0.65)',fontSize:'var(--tx-sm)',transition:'color var(--t)',textTransform:'capitalize'}} className="footer-lnk">{h.replace('#','')}</a>
            ))}
          </div>

          <div style={{display:'grid',gap:'var(--sp-3)'}}>
            <strong style={{fontSize:'var(--tx-xs)',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)'}}>Contact</strong>
            <a href="mailto:hello@hyvaroolabs.com" style={{color:'rgba(250,248,243,0.65)',fontSize:'var(--tx-sm)'}} className="footer-lnk">hello@hyvaroolabs.com</a>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" style={{color:'rgba(250,248,243,0.65)',fontSize:'var(--tx-sm)'}} className="footer-lnk">+62 851-5961-1202</a>
            <p style={{color:'rgba(250,248,243,0.35)',fontSize:'var(--tx-xs)',marginTop:'var(--sp-2)'}}>Jakarta, Indonesia</p>
          </div>
        </div>

        <div style={{marginTop:'clamp(2rem,4vw,4rem)',paddingTop:'var(--sp-6)',borderTop:'1px solid rgba(250,248,243,0.1)',display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'var(--sp-3)'}}>
          <p style={{color:'rgba(250,248,243,0.35)',fontSize:'var(--tx-xs)'}}>© 2026 Hyvaroo Labs. All rights reserved.</p>
          <p style={{color:'rgba(250,248,243,0.35)',fontSize:'var(--tx-xs)',fontStyle:'italic',fontFamily:'var(--f-display)'}}>Crafted with precision.</p>
        </div>
      </div>
      <style>{`
        .footer-grid{display:grid;gap:var(--sp-10);}
        @media(min-width:768px){.footer-grid{grid-template-columns:1.4fr 0.8fr 0.8fr;}}
        .footer-lnk:hover{color:var(--gold)!important;}
      `}</style>
    </footer>
  )
}