import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const points = [
  { title: 'High-performance engineering',   desc: 'Lean, fast, and stable code that holds up under real usage, not just during development.' },
  { title: 'Strategic UI / UX',              desc: 'Interfaces designed around user intent, not decoration. Every element earns its place.' },
  { title: 'Scalable from day one',          desc: 'Architecture decisions that let products grow without expensive rewrites six months later.' },
  { title: 'Delivery with discipline',       desc: 'Scoped clearly, executed precisely. No scope creep and no missed timelines.' },
  { title: 'Premium attention to detail',   desc: 'The difference between good and exceptional is in the small decisions. We never skip them.' },
  { title: 'Partnership mentality',         desc: 'We treat every project as our own product, with care, ownership, and long-term thinking.' },
]

export default function WhyUs() {
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
        .why-section {
          padding: clamp(6rem, 12vw, 10rem) 0;
          background: #0d0c10;
          border-top: 1px solid rgba(240,237,232,0.05);
          position: relative;
          overflow: hidden;
        }
        .why-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse 60% 50% at 80% 80%, rgba(201,169,110,0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .why-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.2rem, 1rem + 4vw, 5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #f0ede8;
          max-width: 14ch;
        }
        .why-h2 em { font-style: italic; }
        .why-grid {
          display: grid;
          gap: 1px;
          margin-top: 5rem;
          background: rgba(240,237,232,0.05);
          border-radius: 8px;
          overflow: hidden;
        }
        @media (min-width: 640px)  { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .why-grid { grid-template-columns: repeat(3, 1fr); } }
        .why-card {
          background: #0d0c10;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          cursor: default;
          transition: background 280ms;
          position: relative;
          overflow: hidden;
        }
        .why-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 0;
          background: linear-gradient(180deg, rgba(201,169,110,0.08), transparent);
          transition: height 350ms cubic-bezier(0.16,1,0.3,1);
        }
        .why-card:hover { background: #121118; }
        .why-card:hover::before { height: 60px; }
        .why-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .why-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.1rem, 0.95rem + 0.6vw, 1.5rem);
          font-weight: 400;
          color: #f0ede8;
          line-height: 1.2;
        }
        .why-arrow {
          color: rgba(201,169,110,0.25);
          flex-shrink: 0;
          transition: color 250ms, transform 250ms;
        }
        .why-card:hover .why-arrow { color: #c9a96e; transform: translate(2px, -2px); }
        .why-desc {
          font-size: clamp(0.83rem, 0.78rem + 0.2vw, 0.93rem);
          color: rgba(240,237,232,0.38);
          line-height: 1.8;
        }
      `}</style>

      <section id="why-us" className="why-section" ref={ref}>
        <div className="wrap">
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            <span className="eyebrow reveal">Why Hyvaroo</span>
            <h2 className="why-h2 reveal reveal-delay-1">The standard<br /><em>we live by.</em></h2>
            <span className="gold-line reveal reveal-delay-2" />
          </div>
          <div className="why-grid">
            {points.map(({ title, desc }, i) => (
              <div key={title} className={`why-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="why-card-header">
                  <h3 className="why-title">{title}</h3>
                  <ArrowUpRight size={15} className="why-arrow" />
                </div>
                <p className="why-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
