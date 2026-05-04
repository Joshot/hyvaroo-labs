const navLinks = ['#services','#portfolio','#about','#why-us','#contact']

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #1a1610;
          color: #faf8f3;
          padding: clamp(3rem, 6vw, 5rem) 0 clamp(2rem, 4vw, 3rem);
        }
        .footer-grid {
          display: grid;
          gap: 2.5rem;
        }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1.4fr 0.8fr 0.8fr; }
        }
        .footer-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1vw, 1.8rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #faf8f3;
        }
        .footer-brand-sub {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8965a;
          margin-top: 4px;
        }
        .footer-tagline {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem;
          color: rgba(250,248,243,0.5);
          max-width: 34ch;
          line-height: 1.75;
          margin-top: 1.25rem;
        }
        .footer-col-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8965a;
          font-weight: 600;
          margin-bottom: 0.75rem;
          display: block;
        }
        .footer-link {
          display: block;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem;
          color: rgba(250,248,243,0.6);
          text-decoration: none;
          padding: 0.25rem 0;
          text-transform: capitalize;
          transition: color 180ms;
        }
        .footer-link:hover { color: #b8965a; }
        .footer-bottom {
          margin-top: clamp(2rem, 4vw, 4rem);
          padding-top: 1.5rem;
          border-top: 1px solid rgba(250,248,243,0.08);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-copy {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.72rem;
          color: rgba(250,248,243,0.3);
        }
        .footer-craft {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 0.88rem;
          font-style: italic;
          color: rgba(250,248,243,0.3);
        }
      `}</style>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">Hyvaroo Labs</div>
              <div className="footer-brand-sub">Software House</div>
              <p className="footer-tagline">
                Premium digital products for companies that demand more than ordinary execution.
              </p>
            </div>
            <div>
              <span className="footer-col-label">Navigation</span>
              {navLinks.map(h => (
                <a key={h} href={h} className="footer-link">{h.replace('#', '')}</a>
              ))}
            </div>
            <div>
              <span className="footer-col-label">Contact</span>
              <a href="mailto:hello@hyvaroolabs.com" className="footer-link">hello@hyvaroolabs.com</a>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="footer-link">+62 851-5961-1202</a>
              <p style={{ color:'rgba(250,248,243,0.3)', fontSize:'0.7rem', marginTop:'0.75rem', fontFamily:'DM Sans, system-ui, sans-serif' }}>Jakarta, Indonesia</p>
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
