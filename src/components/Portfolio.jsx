const work = [
  {
    n: '01',
    title: 'SaaS Analytics Platform',
    cat: 'Dashboard · Data UI',
    year: '2025',
    desc: 'Enterprise dashboard with real-time metrics, custom charting, and multi-tenant architecture built for a B2B analytics startup.',
  },
  {
    n: '02',
    title: 'Startup Marketing Site',
    cat: 'Brand · SEO · Motion',
    year: '2025',
    desc: 'Conversion-focused company site with editorial layout, premium motion, and performance scores in the top 5% globally.',
  },
  {
    n: '03',
    title: 'B2B Operations Portal',
    cat: 'Portal · Workflow',
    year: '2024',
    desc: 'Internal operations tool for a logistics company — role-based access, real-time updates, and a clean data-dense UI.',
  },
  {
    n: '04',
    title: 'E-Commerce Experience',
    cat: 'E-Commerce · UX',
    year: '2024',
    desc: 'Premium shopping experience with editorial product presentation, seamless checkout, and mobile-first interaction design.',
  },
]

export default function Portfolio() {
  return (
    <>
      <style>{`
        .port-section {
          padding: clamp(5rem, 10vw, 8rem) 0;
          background: #f5f0e8;
          border-top: 1px solid #ddd8ce;
        }
        .port-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 2rem;
          margin-bottom: 4rem;
        }
        .port-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 1.2rem + 3.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.0;
          color: #1a1610;
          max-width: 14ch;
        }
        .port-h2 em { font-style: italic; }
        .port-list { display: grid; gap: 0.75rem; }
        .port-card {
          display: grid;
          gap: 1.25rem;
          padding: 2rem;
          border-radius: 16px;
          border: 1px solid #ddd8ce;
          background: #faf8f3;
          transition: all 200ms cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .port-card:hover {
          background: #f5f0e8;
          box-shadow: 0 10px 40px rgba(26,22,16,0.07), 0 1px 0 rgba(184,150,90,0.18);
          transform: translateY(-2px);
        }
        .port-card-inner {
          display: grid;
          gap: 1rem;
        }
        .port-card-left {
          display: flex;
          align-items: baseline;
          gap: 1rem;
        }
        .port-num {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #b8965a;
          min-width: 20px;
        }
        .port-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1.2vw, 2rem);
          font-weight: 400;
          color: #1a1610;
          line-height: 1.1;
        }
        .port-meta {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.68rem;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          font-weight: 600;
          color: #8a7e6a;
          margin-top: 3px;
        }
        .port-desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(0.88rem, 0.84rem + 0.2vw, 0.98rem);
          color: #4a4030;
          max-width: 56ch;
          line-height: 1.78;
        }
        .port-bar {
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, #d4aa6a, #8a6a38, #ede8de);
          opacity: 0.6;
        }
        @media (min-width: 900px) {
          .port-card-inner {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }
      `}</style>

      <section id="portfolio" className="port-section">
        <div className="wrap">
          <div className="port-header">
            <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              <span className="eyebrow">Selected Work</span>
              <h2 className="port-h2">Work that<br /><em>speaks for itself.</em></h2>
            </div>
            <span className="gold-rule" style={{ margin: 0, width: 64 }} />
          </div>
          <div className="port-list">
            {work.map(({ n, title, cat, year, desc }, i) => (
              <div key={title} className="port-card">
                <div className="port-card-inner">
                  <div className="port-card-left">
                    <span className="port-num">{n}</span>
                    <div>
                      <h3 className="port-title">{title}</h3>
                      <p className="port-meta">{cat} · {year}</p>
                    </div>
                  </div>
                  <p className="port-desc">{desc}</p>
                </div>
                <div className="port-bar" style={{ opacity: 0.5 + i * 0.1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
