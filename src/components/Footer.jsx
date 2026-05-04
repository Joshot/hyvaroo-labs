const nav = ['#services','#portfolio','#manifesto','#why-us','#contact']
const labels = { '#services':'Services', '#portfolio':'Portfolio', '#manifesto':'About', '#why-us':'Why Us', '#contact':'Contact' }

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #050508;
          border-top: 1px solid rgba(201,169,110,0.1);
          padding: clamp(3.5rem, 7vw, 6rem) 0 clamp(2rem, 4vw, 3rem);
        }
        .footer-grid {
          display: grid;
          gap: 3rem;
        }
        @media (min-width: 768px) { .footer-grid { grid-template-columns: 1.5fr 0.8fr 0.8fr; } }
        .footer-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1vw, 1.9rem);
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #f0ede8;
        }
        .footer-sub {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-top: 4px;
          display: block;
        }
        .footer-tagline {
          font-size: 0.88rem;
          color: rgba(240,237,232,0.35);
          max-width: 34ch;
          line-height: 1.75;
          margin-top: 1.25rem;
        }
        .footer-col-lbl {
          font-size: 0.6rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c9a96e;
          font-weight: 600;
          margin-bottom: 1rem;
          display: block;
        }
        .footer-link {
          display: block;
          font-size: 0.88rem;
          color: rgba(240,237,232,0.45);
          text-decoration: none;
          padding: 0.3rem 0;
          text-transform: capitalize;
          transition: color 180ms;
        }
        .footer-link:hover { color: #c9a96e; }
        .footer-bottom {
          margin-top: clamp(2.5rem, 5vw, 4rem);
          padding-top: 1.5rem;
          border-top: 1px solid rgba(240,237,232,0.06);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-copy {
          font-size: 0.7rem;
          color: rgba(240,237,232,0.2);
        }
        .footer-craft {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 0.88rem;
          font-style: italic;
          color: rgba(240,237,232,0.2);
        }
      `}</style>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-name">Hyvaroo Labs</div>
              <span className="footer-sub">Software House</span>
              <p className="footer-tagline">
                Premium digital products for companies that demand more than ordinary execution.
              </p>
            </div>
            <div>
              <span className="footer-col-lbl">Navigation</span>
              {nav.map(h => <a key={h} href={h} className="footer-link">{labels[h]}</a>)}
            </div>
            <div>
              <span className="footer-col-lbl">Contact</span>
              <a href="mailto:hello@hyvaroolabs.com" className="footer-link">hello@hyvaroolabs.com</a>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="footer-link">+62 851-5961-1202</a>
              <p style={{ color:'rgba(240,237,232,0.2)', fontSize:'0.7rem', marginTop:'1rem', fontFamily:'DM Sans, system-ui, sans-serif' }}>Jakarta, Indonesia</p>
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
