const items = ['Web Development','UI/UX Design','Frontend Engineering','Performance Optimization','Scalable Architecture','Premium Products','Digital Strategy','React & Next.js','Laravel & PHP','Modern Standards']

export default function Ticker() {
  const all = [...items,...items,...items]
  return (
    <>
      <style>{`
        .ticker{overflow:hidden;padding:0.9rem 0;background:#111;}
        .ticker-track{display:flex;gap:2.5rem;width:max-content;animation:marquee-x 32s linear infinite}
        .ticker-item{display:inline-flex;align-items:center;gap:1.5rem;white-space:nowrap;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.8rem;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;
          color:rgba(255,255,255,0.5)}
        .ticker-sep{display:block;width:4px;height:4px;border-radius:50%;flex-shrink:0}
      `}</style>
      <div className="ticker">
        <div className="ticker-track">
          {all.map((t,i)=>(
            <span key={i} className="ticker-item">
              {t}
              <span className="ticker-sep" style={{background:['#ff6b35','#4338ca','#10b981','#f59e0b','#0ea5e9','#f43f5e'][i%6]}} aria-hidden="true"/>
            </span>
          ))}
        </div>
      </div>
    </>
  )
}
