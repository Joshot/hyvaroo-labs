const items = ['Web Development','UI / UX Design','Frontend Engineering','Performance Optimization','Scalable Architecture','Premium Digital Products','Growth Engineering','World-Class Standards']

export default function Ticker() {
  const all = [...items, ...items, ...items]
  return (
    <>
      <style>{`
        .ticker {
          overflow: hidden;
          border-top: 1px solid rgba(201,169,110,0.12);
          border-bottom: 1px solid rgba(201,169,110,0.12);
          background: rgba(201,169,110,0.04);
          padding: 1rem 0;
        }
        .ticker-track {
          display: flex;
          gap: 3rem;
          width: max-content;
          animation: ticker-move 36s linear infinite;
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          white-space: nowrap;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1rem, 0.9rem + 0.5vw, 1.4rem);
          font-style: italic;
          font-weight: 400;
          color: rgba(240,237,232,0.45);
        }
        .ticker-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #c9a96e;
          opacity: 0.6;
          flex-shrink: 0;
        }
        @keyframes ticker-move {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
      <div className="ticker">
        <div className="ticker-track">
          {all.map((t, i) => (
            <span key={i} className="ticker-item">
              {t}<span className="ticker-sep" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
