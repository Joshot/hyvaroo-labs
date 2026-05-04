import { useEffect, useRef } from 'react'
import { Code2, Layers, PenTool, Zap } from 'lucide-react'

const svcs = [
  { n:'01', Icon: Code2,    title: 'Web Development',      desc: 'End-to-end digital products engineered for speed, reliability, and long-term scalability with meticulous technical craft.' },
  { n:'02', Icon: Layers,   title: 'Frontend Engineering',  desc: 'Component systems and polished interfaces built with clean code, modern tooling, and precision interaction design.' },
  { n:'03', Icon: PenTool,  title: 'UI / UX Design',        desc: 'Strategy-led design that converts. Minimal, intentional, and tuned to the expectations of a global product audience.' },
  { n:'04', Icon: Zap,      title: 'Performance & Scale',   desc: 'Architecture audits, load optimization, and front-end engineering that meets enterprise-grade standards under pressure.' },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.15 })
    el.querySelectorAll('.reveal').forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function Services() {
  const ref = useReveal()
  return (
    <>
      <style>{`
        .svc-section {
          padding: clamp(6rem, 12vw, 10rem) 0;
          background: #08070a;
          border-top: 1px solid rgba(240,237,232,0.05);
          position: relative;
          overflow: hidden;
        }
        .svc-section::before {
          content: '';
          position: absolute;
          top: -20%;
          left: -10%;
          width: 60%;
          height: 60%;
          background: radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 65%);
          pointer-events: none;
        }
        .svc-header {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 5rem;
        }
        .svc-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 1rem + 4vw, 5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #f0ede8;
          max-width: 12ch;
        }
        .svc-h2 em { font-style: italic; }
        .svc-grid {
          display: grid;
          gap: 1px;
          background: rgba(240,237,232,0.06);
          border: 1px solid rgba(240,237,232,0.06);
          border-radius: 8px;
          overflow: hidden;
        }
        .svc-card {
          background: #0d0c10;
          padding: clamp(2rem, 4vw, 3rem);
          display: grid;
          gap: 1.5rem;
          transition: background 300ms;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .svc-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          height: 1px;
          width: 0;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
          transition: width 500ms cubic-bezier(0.16,1,0.3,1);
        }
        .svc-card:hover { background: #141218; }
        .svc-card:hover::after { width: 100%; }
        .svc-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }
        .svc-num {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: #c9a96e;
        }
        .svc-icon {
          width: 42px; height: 42px;
          border: 1px solid rgba(201,169,110,0.2);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #c9a96e;
          transition: background 300ms, border-color 300ms;
        }
        .svc-card:hover .svc-icon {
          background: rgba(201,169,110,0.1);
          border-color: rgba(201,169,110,0.4);
        }
        .svc-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 1.1rem + 1vw, 2rem);
          font-weight: 400;
          color: #f0ede8;
          line-height: 1.1;
        }
        .svc-desc {
          font-size: clamp(0.85rem, 0.8rem + 0.2vw, 0.95rem);
          color: rgba(240,237,232,0.45);
          line-height: 1.8;
          max-width: 52ch;
        }
        @media (min-width: 768px) { .svc-grid { grid-template-columns: 1fr 1fr; } }
      `}</style>

      <section id="services" className="svc-section" ref={ref}>
        <div className="wrap">
          <div className="svc-header">
            <span className="eyebrow reveal">What We Do</span>
            <h2 className="svc-h2 reveal reveal-delay-1">Craft built<br /><em>for impact.</em></h2>
            <span className="gold-line reveal reveal-delay-2" />
          </div>
          <div className="svc-grid">
            {svcs.map(({ n, Icon, title, desc }, i) => (
              <div key={title} className={`svc-card reveal reveal-delay-${i % 4 + 1}`}>
                <div className="svc-card-top">
                  <span className="svc-num">{n}</span>
                  <div className="svc-icon"><Icon size={17} /></div>
                </div>
                <h3 className="svc-title">{title}</h3>
                <p className="svc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
