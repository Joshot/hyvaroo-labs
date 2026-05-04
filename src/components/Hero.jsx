import { ArrowUpRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          min-height: 96vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #faf8f3;
        }
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(184,150,90,0.06) 80px),
            repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(184,150,90,0.06) 80px);
          background-size: 80px 80px;
          pointer-events: none;
        }
        .hero-glow {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 55%;
          height: 70%;
          background: radial-gradient(ellipse, rgba(212,170,106,0.13) 0%, transparent 65%);
          pointer-events: none;
        }
        .hero-inner {
          width: min(calc(100% - 3rem), 1080px);
          margin-inline: auto;
          position: relative;
          z-index: 1;
          padding-top: clamp(4rem, 8vw, 7rem);
          padding-bottom: clamp(4rem, 8vw, 7rem);
        }
        .hero-content {
          display: grid;
          gap: 1.5rem;
          max-width: 820px;
        }
        .hero-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .eyebrow {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b8965a;
        }
        .eyebrow-line {
          display: block;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, #b8965a, transparent);
        }
        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.2rem, 1.5rem + 6.5vw, 7.8rem);
          line-height: 0.94;
          letter-spacing: -0.04em;
          font-weight: 300;
          color: #1a1610;
          margin-top: 0.5rem;
        }
        .hero-h1 em {
          font-style: italic;
          font-weight: 300;
        }
        .hero-h1 .gold { color: #b8965a; font-weight: 400; }
        .hero-desc {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.25rem);
          color: #4a4030;
          max-width: 50ch;
          font-weight: 300;
          line-height: 1.85;
          margin-top: 0.5rem;
        }
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 52px;
          padding: 0 2rem;
          border-radius: 9999px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: #1a1610;
          color: #faf8f3;
          text-decoration: none;
          border: 1.5px solid #1a1610;
          transition: background 200ms, transform 200ms, box-shadow 200ms;
        }
        .btn-primary:hover {
          background: #8a6a38;
          border-color: #8a6a38;
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(184,150,90,0.25);
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 52px;
          padding: 0 2rem;
          border-radius: 9999px;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          background: transparent;
          color: #1a1610;
          text-decoration: none;
          border: 1.5px solid #ddd8ce;
          transition: border-color 200ms, color 200ms, transform 200ms;
        }
        .btn-outline:hover {
          border-color: #b8965a;
          color: #8a6a38;
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid #ddd8ce;
        }
        .hero-stat-val {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 1rem + 1.2vw, 2rem);
          font-weight: 600;
          line-height: 1;
          color: #1a1610;
        }
        .hero-stat-label {
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #b8965a;
          margin-top: 4px;
        }
        .hero-bg-num {
          position: absolute;
          right: -2%;
          bottom: -4%;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(8rem, 18vw, 22rem);
          font-weight: 700;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(184,150,90,0.1);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.06em;
        }
        .hero-scroll {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        .hero-scroll-text {
          writing-mode: vertical-rl;
          font-family: 'DM Sans', system-ui, sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8ae9e;
        }
        @media (min-width: 900px) {
          .hero-scroll { display: flex; }
        }
      `}</style>

      <section id="top" className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow-row">
              <span className="eyebrow">Est. 2024</span>
              <span className="eyebrow-line" />
              <span className="eyebrow">Jakarta, Indonesia</span>
            </div>

            <h1 className="hero-h1">
              We craft<br />
              <em>exceptional</em><br />
              <span className="gold">digital work.</span>
            </h1>

            <p className="hero-desc">
              Hyvaroo Labs is a premium software house. We build high-performance web products
              for founders and companies who demand more than ordinary.
            </p>

            <div className="hero-btns">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start a Project <ArrowUpRight size={15} />
              </a>
              <a href="#portfolio" className="btn-outline">View Our Work</a>
            </div>

            <div className="hero-stats">
              {[['Scalable','Architecture'],['Premium','UI / UX'],['Fast','Delivery'],['Modern','Standards']].map(([a,b]) => (
                <div key={a}>
                  <div className="hero-stat-val">{a}</div>
                  <div className="hero-stat-label">{b}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            <span className="hero-scroll-text">Scroll to explore</span>
            <ArrowDown size={13} style={{ color: '#b8ae9e' }} />
          </div>
        </div>

        <div className="hero-bg-num" aria-hidden="true">01</div>
      </section>
    </>
  )
}
