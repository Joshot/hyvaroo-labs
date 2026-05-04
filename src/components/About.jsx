const stats = [
  { stat: '100%', label: 'Client Satisfaction', sub: 'Every project delivered to spec' },
  { stat: 'Fast',  label: 'Time to Market',      sub: 'Scoped for launch velocity'      },
  { stat: 'Global',label: 'Design Standard',     sub: 'Aligned to worldwide product UI' },
  { stat: 'Scale', label: 'Architecture First',  sub: 'Built to grow without rebuilds'  },
]

export default function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: clamp(5rem, 10vw, 8rem) 0;
          border-top: 1px solid #ddd8ce;
          background: #faf8f3;
        }
        .about-grid {
          display: grid;
          gap: 4rem;
          align-items: start;
        }
        @media (min-width: 900px) {
          .about-grid { grid-template-columns: 1.1fr 0.9fr; }
        }
        .about-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 1.2rem + 3.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.0;
          color: #1a1610;
        }
        .about-h2 em { font-style: italic; }
        .about-lead {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
          color: #4a4030;
          font-weight: 300;
          line-height: 1.85;
          max-width: 48ch;
        }
        .about-body {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
          color: #8a7e6a;
          max-width: 48ch;
          line-height: 1.82;
        }
        .about-body em { font-style: italic; color: #4a4030; }
        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .stat-card {
          padding: 1.5rem;
          border: 1px solid #ddd8ce;
          border-radius: 16px;
          background: #f5f0e8;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .stat-val {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1.2vw, 2rem);
          font-weight: 600;
          color: #1a1610;
          line-height: 1;
        }
        .stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: #1a1610;
        }
        .stat-sub {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.7rem;
          color: #8a7e6a;
          line-height: 1.5;
        }
      `}</style>

      <section id="about" className="about-section">
        <div className="wrap">
          <div className="about-grid">
            <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
              <span className="eyebrow">About Hyvaroo Labs</span>
              <h2 className="about-h2">Built to move<br /><em>businesses forward.</em></h2>
              <span className="gold-rule" />
              <p className="about-lead">
                Hyvaroo Labs is a technology-focused software house dedicated to building
                scalable and high-performance digital products for companies that demand excellence.
              </p>
              <p className="about-body">
                The name is rooted in <em>high value</em> and <em>route</em> — every engagement
                is structured as a clear path toward better products, better systems,
                and measurable growth.
              </p>
            </div>
            <div className="stat-grid">
              {stats.map(({ stat, label, sub }) => (
                <div key={label} className="stat-card">
                  <span className="stat-val">{stat}</span>
                  <strong className="stat-label">{label}</strong>
                  <span className="stat-sub">{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
