const items = ['Web Development','UI/UX Design','Frontend Engineering','Performance Optimization','Scalable Architecture','Premium Products','Digital Strategy','Modern Standards','React & Next.js','Laravel & PHP']

export default function Ticker() {
  const all = [...items,...items,...items]
  return (
    <>
      <style>{`
        .ticker-wrap{
          overflow:hidden;
          border-top:1px solid rgba(184,150,90,0.15);
          border-bottom:1px solid rgba(184,150,90,0.15);
          background:rgba(184,150,90,0.04);
          padding:0.85rem 0;
        }
        .ticker-track{
          display:flex;gap:3rem;width:max-content;
          animation:marquee-x 35s linear infinite;
        }
        .ticker-item{
          display:inline-flex;align-items:center;gap:1.5rem;
          white-space:nowrap;
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(0.95rem,0.85rem + 0.4vw,1.2rem);
          font-weight:400;font-style:italic;
          color:rgba(232,224,208,0.55);
        }
        .ticker-sep{display:block;width:4px;height:4px;border-radius:50%;background:#b8965a;flex-shrink:0;opacity:0.7}
        @keyframes marquee-x{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}
      `}</style>
      <div className="ticker-wrap">
        <div className="ticker-track">
          {all.map((t,i)=>(
            <span key={i} className="ticker-item">
              {t}<span className="ticker-sep" aria-hidden="true"/>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
