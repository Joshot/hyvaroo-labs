import { useEffect, useRef } from 'react'

export default function Manifesto() {
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
        .mani-section {
          padding: clamp(6rem, 14vw, 12rem) 0;
          background: #08070a;
          border-top: 1px solid rgba(240,237,232,0.05);
          position: relative;
          overflow: hidden;
        }
        .mani-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.055) 0%, transparent 70%);
          pointer-events: none;
        }
        .mani-inner {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin-inline: auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
        }
        .mani-quote {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 0.8rem + 4.5vw, 5rem);
          font-weight: 300;
          line-height: 1.12;
          letter-spacing: -0.025em;
          color: #f0ede8;
        }
        .mani-quote em {
          font-style: italic;
          background: linear-gradient(135deg, #f0c96e 0%, #c9a96e 50%, #8a6030 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mani-body {
          font-size: clamp(0.95rem, 0.88rem + 0.3vw, 1.1rem);
          color: rgba(240,237,232,0.45);
          max-width: 52ch;
          line-height: 1.9;
          font-weight: 300;
        }
        .mani-body em { font-style: italic; color: rgba(240,237,232,0.7); }
        .mani-divider {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }
        .mani-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 1px;
          justify-content: center;
          background: rgba(240,237,232,0.06);
          border: 1px solid rgba(240,237,232,0.06);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          margin-top: 1rem;
        }
        .mani-stat {
          flex: 1;
          min-width: 140px;
          background: #0d0c10;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          text-align: center;
        }
        .mani-stat-n {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.8rem, 1.2rem + 2vw, 3rem);
          font-weight: 600;
          color: #c9a96e;
          line-height: 1;
        }
        .mani-stat-l {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.35);
        }
      `}</style>

      <section id="manifesto" className="mani-section" ref={ref}>
        <div className="mani-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="mani-inner">
            <span className="eyebrow reveal">About Hyvaroo Labs</span>
            <div className="mani-divider reveal reveal-delay-1" />
            <blockquote className="mani-quote reveal reveal-delay-1">
              We do not build websites.<br />
              We craft <em>digital experiences</em><br />
              that move businesses forward.
            </blockquote>
            <p className="mani-body reveal reveal-delay-2">
              Hyvaroo Labs was founded on one principle: software should be <em>remarkable</em>.
              Not just functional. Not just delivered on time. But genuinely exceptional in every detail.
            </p>
            <div className="mani-stats reveal reveal-delay-3">
              {[['100%','Client Satisfaction'],['2024','Founded'],['Fast','Time to Market'],['Global','Quality Standard']].map(([n,l]) => (
                <div key={l} className="mani-stat">
                  <span className="mani-stat-n">{n}</span>
                  <span className="mani-stat-l">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
