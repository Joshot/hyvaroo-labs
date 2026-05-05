const navLinks = ['#services','#portfolio','#process','#about','#contact']

export default function Footer() {
  return (
    <>
      <style>{`
        .footer{background:#080603;padding:clamp(3rem,6vw,5rem) 0 2rem;border-top:1px solid rgba(184,150,90,0.1)}
        .footer-grid{display:grid;gap:3rem}
        @media(min-width:768px){.footer-grid{grid-template-columns:1.6fr 0.7fr 0.7fr}}
        .footer-name{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.4rem,1rem + 1vw,1.9rem);
          font-weight:600;
          background:linear-gradient(135deg,#faf8f3,#d4aa6a);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .footer-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.6rem;font-weight:600;
          letter-spacing:0.18em;text-transform:uppercase;
          color:#b8965a;margin-top:3px;
        }
        .footer-tag{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;
          color:rgba(232,224,208,0.35);
          max-width:32ch;line-height:1.75;margin-top:1.25rem;
        }
        .footer-col-title{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;font-weight:600;
          letter-spacing:0.14em;text-transform:uppercase;
          color:rgba(184,150,90,0.5);margin-bottom:1rem;display:block;
        }
        .footer-link{
          display:block;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.86rem;
          color:rgba(232,224,208,0.4);
          padding:0.3rem 0;text-transform:capitalize;
          text-decoration:none;transition:color 180ms;
        }
        .footer-link:hover{color:#b8965a}
        .footer-bottom{
          margin-top:3rem;padding-top:1.5rem;
          border-top:1px solid rgba(184,150,90,0.07);
          display:flex;justify-content:space-between;
          flex-wrap:wrap;gap:0.75rem;
        }
        .footer-copy{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.7rem;color:rgba(232,224,208,0.2);
        }
        .footer-craft{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:0.88rem;font-style:italic;
          color:rgba(184,150,90,0.3);
        }
      `}</style>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-name">Hyvaroo Labs</div>
              <div className="footer-sub">Software House</div>
              <p className="footer-tag">Premium digital products for companies that demand more than ordinary execution.</p>
            </div>
            <div>
              <span className="footer-col-title">Navigation</span>
              {navLinks.map(h=>(
                <a key={h} href={h} className="footer-link">{h.replace('#','')}</a>
              ))}
            </div>
            <div>
              <span className="footer-col-title">Contact</span>
              <a href="mailto:hello@hyvaroolabs.com" className="footer-link">hello@hyvaroolabs.com</a>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="footer-link">+62 851-5961-1202</a>
              <p style={{color:'rgba(184,150,90,0.25)',fontSize:'0.7rem',marginTop:'0.75rem',fontFamily:'DM Sans,system-ui,sans-serif'}}>Jakarta, Indonesia</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">2026 Hyvaroo Labs. All rights reserved.</p>
            <p className="footer-craft">Crafted with precision.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
