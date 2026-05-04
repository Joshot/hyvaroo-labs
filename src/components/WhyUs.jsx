import { ArrowUpRight } from 'lucide-react'

const points = [
  {
    title: 'High-performance engineering',
    desc: 'Lean, fast, and stable code that holds up under real usage — not just during development.',
  },
  {
    title: 'Strategic UI / UX',
    desc: 'Interfaces designed around user intent, not decoration. Every element earns its place.',
  },
  {
    title: 'Scalable from day one',
    desc: 'Architecture decisions that let products grow without expensive rewrites.',
  },
  {
    title: 'Delivery with discipline',
    desc: 'Scoped clearly, executed precisely. No scope creep, no missed timelines.',
  },
  {
    title: 'Premium attention to detail',
    desc: 'The difference between good and exceptional is in the small decisions — and we never skip them.',
  },
  {
    title: 'Partnership mentality',
    desc: 'We treat every project as our own product — with care, ownership, and long-term thinking.',
  },
]

export default function WhyUs() {
  return (
    <>
      <style>{`
        .why-section {
          padding: clamp(5rem, 10vw, 8rem) 0;
          background: #f5f0e8;
          border-top: 1px solid #ddd8ce;
        }
        .why-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 1.2rem + 3.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.0;
          color: #1a1610;
          max-width: 14ch;
        }
        .why-h2 em { font-style: italic; }
        .why-grid {
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 680px)  { .why-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 980px)  { .why-grid { grid-template-columns: repeat(3, 1fr); } }
        .why-card {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.5rem;
          border: 1px solid #ddd8ce;
          border-radius: 16px;
          background: #faf8f3;
          transition: all 200ms cubic-bezier(0.16,1,0.3,1);
          cursor: default;
        }
        .why-card:hover {
          background: #f5f0e8;
          box-shadow: 0 8px 32px rgba(26,22,16,0.06), 0 1px 0 rgba(184,150,90,0.15);
        }
        .why-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.75rem;
        }
        .why-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.1rem, 1rem + 0.5vw, 1.4rem);
          font-weight: 500;
          line-height: 1.2;
          color: #1a1610;
        }
        .why-desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.88rem;
          color: #4a4030;
          line-height: 1.75;
        }
      `}</style>

      <section id="why-us" className="why-section">
        <div className="wrap">
          <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'4rem' }}>
            <span className="eyebrow">Why Hyvaroo</span>
            <h2 className="why-h2">The standard<br /><em>we hold ourselves to.</em></h2>
            <span className="gold-rule" />
          </div>
          <div className="why-grid">
            {points.map(({ title, desc }) => (
              <div key={title} className="why-card">
                <div className="why-card-top">
                  <h3 className="why-title">{title}</h3>
                  <ArrowUpRight size={15} style={{ color:'#b8965a', flexShrink:0, marginTop:4 }} />
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
