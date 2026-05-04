import { MessageCircle, Mail } from 'lucide-react'

const info = [
  { label: 'Based in',      value: 'Jakarta, Indonesia' },
  { label: 'Response time', value: 'Under 24 hours'     },
  { label: 'Engagement',    value: 'Project-based'      },
  { label: 'Language',      value: 'ID & EN'             },
]

export default function CTA() {
  return (
    <>
      <style>{`
        .cta-section {
          padding: clamp(5rem, 10vw, 8rem) 0;
          border-top: 1px solid #ddd8ce;
          background: #faf8f3;
        }
        .cta-center {
          display: grid;
          gap: 0.75rem;
          text-align: center;
          max-width: 640px;
          margin-inline: auto;
          margin-bottom: 4rem;
        }
        .cta-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 1.2rem + 3.5vw, 4.2rem);
          font-weight: 300;
          line-height: 1.0;
          color: #1a1610;
        }
        .cta-h2 em { font-style: italic; }
        .cta-desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.2rem);
          color: #4a4030;
          font-weight: 300;
          line-height: 1.85;
          max-width: 44ch;
          margin-inline: auto;
        }
        .cta-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-top: 1rem;
        }
        .cta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          padding-top: 3rem;
          border-top: 1px solid #ddd8ce;
        }
        .info-card {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 1.25rem 1.5rem;
          border: 1px solid #ddd8ce;
          border-radius: 14px;
          background: #f5f0e8;
          min-width: 130px;
          text-align: center;
        }
        .info-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8965a;
        }
        .info-val {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 0.9rem + 0.4vw, 1.25rem);
          font-weight: 500;
          color: #1a1610;
        }
      `}</style>

      <section id="contact" className="cta-section">
        <div className="wrap">
          <div className="cta-center">
            <span className="eyebrow">Start a Project</span>
            <h2 className="cta-h2">Ready to build<br /><em>something exceptional?</em></h2>
            <span className="gold-rule" style={{ margin:'0.5rem auto 0' }} />
            <p className="cta-desc">
              For founders and teams that need a premium software partner — let us talk about what you are building.
            </p>
            <div className="cta-btns">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <a href="mailto:hello@hyvaroolabs.com" className="btn-outline">
                <Mail size={16} /> Send an Email
              </a>
            </div>
          </div>
          <div className="cta-info">
            {info.map(({ label, value }) => (
              <div key={label} className="info-card">
                <span className="info-label">{label}</span>
                <span className="info-val">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
