import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const work = [
  { n:'01', title:'SaaS Analytics Platform',   cat:'Dashboard · Data UI',  year:'2025', desc:'Enterprise dashboard with real-time metrics, custom charting, and multi-tenant architecture for a B2B analytics startup.' },
  { n:'02', title:'Startup Marketing Site',     cat:'Brand · Motion · SEO', year:'2025', desc:'Conversion-focused company site with editorial layout, premium motion, and global top-5% performance scores.' },
  { n:'03', title:'B2B Operations Portal',      cat:'Portal · Workflow',    year:'2024', desc:'Internal operations tool for logistics company. Role-based access, real-time updates, and a clean data-dense UI.' },
  { n:'04', title:'Premium E-Commerce',         cat:'E-Commerce · UX',      year:'2024', desc:'Editorial product experience, seamless checkout flow, and mobile-first interaction design for a premium brand.' },
]

export default function Portfolio() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .port-section {
          padding: clamp(6rem, 12vw, 10rem) 0;
          background: #0d0c10;
          border-top: 1px solid rgba(240,237,232,0.05);
          position: relative;
          overflow: hidden;
        }
        .port-section::after {
          content: '';
          position: absolute;
          bottom: -20%;
          right: -5%;
          width: 50%;
          height: 60%;
          background: radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .port-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 1rem + 4vw, 5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #f0ede8;
          max-width: 14ch;
        }
        .port-h2 em { font-style: italic; }
        .port-list { display: grid; gap: 1px; margin-top: 5rem; background: rgba(240,237,232,0.05); border-radius: 8px; overflow: hidden; }
        .port-item {
          background: #0d0c10;
          padding: clamp(1.5rem, 3vw, 2.5rem);
          display: grid;
          gap: 1rem;
          cursor: default;
          transition: background 300ms;
          position: relative;
        }
        .port-item::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: linear-gradient(180deg, #c9a96e, #8a6030);
          transition: width 350ms cubic-bezier(0.16,1,0.3,1);
        }
        .port-item:hover { background: #121118; }
        .port-item:hover::before { width: 2px; }
        .port-item-row {
          display: grid;
          gap: 1rem;
          align-items: start;
        }
        .port-num {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #c9a96e;
          min-width: 22px;
        }
        .port-top {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .port-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 1.1rem + 1vw, 2.2rem);
          font-weight: 400;
          color: #f0ede8;
          line-height: 1.05;
        }
        .port-meta {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-top: 4px;
        }
        .port-desc {
          font-size: clamp(0.85rem, 0.8rem + 0.2vw, 0.95rem);
          color: rgba(240,237,232,0.4);
          line-height: 1.8;
          max-width: 58ch;
        }
        .port-arrow {
          color: rgba(201,169,110,0.3);
          flex-shrink: 0;
          transition: color 250ms, transform 250ms;
        }
        .port-item:hover .port-arrow { color: #c9a96e; transform: translate(3px,-3px); }
        @media (min-width: 768px) {
          .port-item-row { grid-template-columns: 1fr auto; align-items: center; }
        }
      `}</style>

      <section id="portfolio" className="port-section" ref={ref}>
        <div className="wrap">
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            <span className="eyebrow reveal">Selected Work</span>
            <h2 className="port-h2 reveal reveal-delay-1">Work that<br /><em>speaks.</em></h2>
            <span className="gold-line reveal reveal-delay-2" />
          </div>
          <div className="port-list">
            {work.map(({ n, title, cat, year, desc }, i) => (
              <div key={title} className={`port-item reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="port-item-row">
                  <div className="port-top">
                    <span className="port-num">{n}</span>
                    <div>
                      <h3 className="port-title">{title}</h3>
                      <p className="port-meta">{cat} · {year}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="port-arrow" />
                </div>
                <p className="port-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
