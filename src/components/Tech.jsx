const stack = [
  'React','Next.js','TypeScript','Laravel','Node.js',
  'Tailwind CSS','PostgreSQL','MySQL','Redis','Vercel',
  'AWS','Docker','Figma','Framer','REST API',
]

export default function Tech() {
  return (
    <>
      <style>{`
        .tech-section{
          padding:clamp(4rem,8vw,7rem) 0;
          background:#0f0d08;
          border-top:1px solid rgba(184,150,90,0.1);
        }
        .tech-header{display:flex;flex-direction:column;gap:1rem;margin-bottom:3.5rem}
        .tech-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.8rem,1rem + 2.5vw,3.5rem);
          font-weight:300;color:#faf8f3;
        }
        .tech-h2 em{font-style:italic}
        .tech-grid{display:flex;flex-wrap:wrap;gap:0.75rem}
        .tech-pill{
          padding:0.5rem 1.25rem;
          border:1px solid rgba(184,150,90,0.15);
          border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:500;
          color:rgba(232,224,208,0.6);
          background:rgba(184,150,90,0.04);
          transition:all 250ms;
          cursor:default;
        }
        .tech-pill:hover{
          border-color:rgba(184,150,90,0.4);
          color:#d4aa6a;
          background:rgba(184,150,90,0.08);
          transform:translateY(-2px);
        }
      `}</style>

      <section className="tech-section">
        <div className="wrap">
          <div className="tech-header">
            <span className="eyebrow">Tech Stack</span>
            <h2 className="tech-h2">Tools we<br/><em>master daily.</em></h2>
            <span className="gold-line"/>
          </div>
          <div className="tech-grid">
            {stack.map(t=>(
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
