import { Code2, Layers, Pen, Zap } from 'lucide-react'

const svcs = [
  {
    n: '01', Icon: Code2,
    title: 'Web Development',
    desc: 'End-to-end digital products engineered for speed, reliability, and long-term scalability with meticulous technical detail.',
  },
  {
    n: '02', Icon: Layers,
    title: 'Frontend Engineering',
    desc: 'Component systems and polished interfaces built with clean code, modern tooling, and precision interaction design.',
  },
  {
    n: '03', Icon: Pen,
    title: 'UI / UX Design',
    desc: 'Strategy-led design that converts — minimal, intentional, and tuned to the expectations of a global audience.',
  },
  {
    n: '04', Icon: Zap,
    title: 'Performance & Scale',
    desc: 'Architecture audits, optimizations, and front-end performance that meets enterprise-grade standards under real load.',
  },
]

export default function Services() {
  return (
    <>
      <style>{`
        .svc-section {
          padding: clamp(5rem, 10vw, 8rem) 0;
          border-top: 1px solid #ddd8ce;
          background: #faf8f3;
        }
        .svc-header {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 4rem;
        }
        .svc-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 1.2rem + 3.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.0;
          color: #1a1610;
          max-width: 14ch;
        }
        .svc-h2 em { font-style: italic; }
        .gold-rule {
          display: block;
          width: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8965a, transparent);
        }
        .svc-list {
          border: 1px solid #ddd8ce;
          border-radius: 20px;
          overflow: hidden;
        }
        .svc-row {
          display: grid;
          gap: 1.25rem;
          padding: clamp(1.5rem, 4vw, 2.5rem);
          border-bottom: 1px solid #ddd8ce;
          transition: background 200ms;
          cursor: default;
        }
        .svc-row:last-child { border-bottom: none; }
        .svc-row:hover { background: #f5f0e8; }
        .svc-row-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }
        .svc-row-left {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .svc-num {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #b8965a;
          min-width: 20px;
        }
        .svc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1.2vw, 2rem);
          font-weight: 400;
          color: #1a1610;
          line-height: 1.1;
        }
        .svc-icon-wrap {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd8ce;
          border-radius: 50%;
          flex-shrink: 0;
          color: #b8965a;
        }
        .svc-desc {
          color: #4a4030;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(0.9rem, 0.85rem + 0.25vw, 1rem);
          max-width: 62ch;
          line-height: 1.75;
          padding-left: calc(20px + 1.25rem);
        }
      `}</style>

      <section id="services" className="svc-section">
        <div className="wrap">
          <div className="svc-header">
            <span className="eyebrow">What We Do</span>
            <h2 className="svc-h2">Services built<br /><em>for growth.</em></h2>
            <span className="gold-rule" />
          </div>
          <div className="svc-list">
            {svcs.map(({ n, Icon, title, desc }) => (
              <div key={title} className="svc-row">
                <div className="svc-row-top">
                  <div className="svc-row-left">
                    <span className="svc-num">{n}</span>
                    <h3 className="svc-title">{title}</h3>
                  </div>
                  <div className="svc-icon-wrap"><Icon size={17} /></div>
                </div>
                <p className="svc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
