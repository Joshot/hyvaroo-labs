const items = [
  'Web Development',
  'UI / UX Design',
  'Frontend Engineering',
  'Performance Optimization',
  'Scalable Systems',
  'Premium Products',
  'Digital Growth',
  'Modern Standards',
]

export default function Marquee() {
  const all = [...items, ...items, ...items]
  return (
    <>
      <style>{`
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid #ddd8ce;
          border-bottom: 1px solid #ddd8ce;
          background: #f5f0e8;
          padding: 1rem 0;
        }
        .marquee-track {
          display: flex;
          gap: 2.5rem;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 1.25rem;
          white-space: nowrap;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.3rem);
          font-weight: 400;
          font-style: italic;
          color: #4a4030;
        }
        .marquee-dot {
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b8965a;
          flex-shrink: 0;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
      <div className="marquee-wrap">
        <div className="marquee-track">
          {all.map((t, i) => (
            <span key={i} className="marquee-item">
              {t}
              <span className="marquee-dot" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
