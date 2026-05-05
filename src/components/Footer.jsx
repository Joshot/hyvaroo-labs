const navLinks=['#services','#portfolio','#process','#about','#contact']

export default function Footer(){
  return(
    <>
      <style>{`
        .footer{background:#111;padding:clamp(3rem,6vw,5rem) 0 2rem}
        .footer-grid{display:grid;gap:3rem}
        @media(min-width:768px){.footer-grid{grid-template-columns:1.6fr 0.7fr 0.7fr}}
        .footer-badge{width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#ff6b35,#f59e0b);display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:0.75rem}
        .footer-name{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.3rem,1rem + 0.8vw,1.8rem);font-weight:600;color:#fff}
        .footer-sub{font-size:0.6rem;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:#ff6b35;font-family:'DM Sans',system-ui,sans-serif;margin-top:2px}
        .footer-tag{font-family:'DM Sans',system-ui,sans-serif;font-size:0.88rem;color:rgba(255,255,255,0.3);max-width:32ch;line-height:1.75;margin-top:1rem}
        .footer-col-title{font-family:'DM Sans',system-ui,sans-serif;font-size:0.62rem;font-weight:600;letter-spacing:0.14em;text-transform:uppercase;color:rgba(255,255,255,0.25);margin-bottom:1rem;display:block}
        .footer-lnk{display:block;font-family:'DM Sans',system-ui,sans-serif;font-size:0.88rem;color:rgba(255,255,255,0.4);padding:0.28rem 0;text-transform:capitalize;text-decoration:none;transition:color 160ms}
        .footer-lnk:hover{color:#ff6b35}
        .footer-bot{margin-top:3rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.06);display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.75rem}
        .footer-copy{font-family:'DM Sans',system-ui,sans-serif;font-size:0.7rem;color:rgba(255,255,255,0.2)}
        .footer-craft{font-family:'Cormorant Garamond',Georgia,serif;font-size:0.9rem;font-style:italic;color:rgba(255,107,53,0.4)}
      `}</style>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-badge">H</div>
              <div className="footer-name">Hyvaroo Labs</div>
              <div className="footer-sub">Software House</div>
              <p className="footer-tag">Premium digital products for companies that demand more than ordinary execution.</p>
            </div>
            <div>
              <span className="footer-col-title">Navigation</span>
              {navLinks.map(h=><a key={h} href={h} className="footer-lnk">{h.replace('#','')}</a>)}
            </div>
            <div>
              <span className="footer-col-title">Contact</span>
              <a href="mailto:hello@hyvaroolabs.com" className="footer-lnk">hello@hyvaroolabs.com</a>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="footer-lnk">+62 851-5961-1202</a>
              <p style={{color:'rgba(255,255,255,0.15)',fontSize:'0.7rem',marginTop:'0.75rem',fontFamily:'DM Sans,system-ui,sans-serif'}}>Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="footer-bot">
            <p className="footer-copy">2026 Hyvaroo Labs. All rights reserved.</p>
            <p className="footer-craft">Crafted with precision.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
