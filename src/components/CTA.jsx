import { useEffect, useRef } from 'react'
import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react'

const info = [
  { label: 'Based in',      value: 'Jakarta, Indonesia' },
  { label: 'Response',      value: 'Under 24 hours'     },
  { label: 'Engagement',    value: 'Project-based'      },
  { label: 'Languages',     value: 'ID & EN'             },
]

export default function CTA() {
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
        .cta-section {
          padding: clamp(6rem, 14vw, 12rem) 0;
          background: #08070a;
          border-top: 1px solid rgba(240,237,232,0.05);
          position: relative;
          overflow: hidden;
        }
        .cta-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 50% at 50% 40%, rgba(201,169,110,0.07) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.5rem;
          max-width: 700px;
          margin-inline: auto;
        }
        .cta-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.5rem, 1rem + 5.5vw, 6.5rem);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.035em;
          color: #f0ede8;
        }
        .cta-h2 em {
          font-style: italic;
          background: linear-gradient(135deg, #f0c96e 0%, #c9a96e 50%, #8a6030 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .cta-desc {
          font-size: clamp(1rem, 0.9rem + 0.4vw, 1.15rem);
          color: rgba(240,237,232,0.45);
          max-width: 42ch;
          font-weight: 300;
          line-height: 1.9;
        }
        .cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-top: 0.5rem;
        }
        .cta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1px;
          justify-content: center;
          background: rgba(240,237,232,0.05);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          margin-top: 2rem;
        }
        .info-item {
          flex: 1;
          min-width: 110px;
          background: #0d0c10;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }
        .info-lbl {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
        }
        .info-val {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(0.95rem, 0.85rem + 0.4vw, 1.2rem);
          font-weight: 500;
          color: #f0ede8;
        }
      `}</style>

      <section id="contact" className="cta-section" ref={ref}>
        <div className="cta-bg" aria-hidden="true" />
        <div className="wrap">
          <div className="cta-inner">
            <span className="eyebrow reveal">Start a Project</span>
            <h2 className="cta-h2 reveal reveal-delay-1">
              Ready to build<br />
              <em>something remarkable?</em>
            </h2>
            <p className="cta-desc reveal reveal-delay-2">
              For founders and teams that need a premium software partner. Let us talk about what you are building.
            </p>
            <div className="cta-btns reveal reveal-delay-3">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-glow">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a href="mailto:hello@hyvaroolabs.com" className="btn-ghost">
                <Mail size={16} /> Send an Email
              </a>
            </div>
            <div className="cta-info reveal reveal-delay-4">
              {info.map(({ label, value }) => (
                <div key={label} className="info-item">
                  <span className="info-lbl">{label}</span>
                  <span className="info-val">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
