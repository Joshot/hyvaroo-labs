const stack=[
  {name:'React',c:'#61dafb',bg:'#e6f9fd'},
  {name:'Next.js',c:'#111',bg:'#f0f0f0'},
  {name:'TypeScript',c:'#3178c6',bg:'#e8f0fb'},
  {name:'Laravel',c:'#ff2d20',bg:'#fff0ef'},
  {name:'Node.js',c:'#339933',bg:'#edf7ed'},
  {name:'Tailwind CSS',c:'#06b6d4',bg:'#e0f7fa'},
  {name:'PostgreSQL',c:'#336791',bg:'#e8edf6'},
  {name:'MySQL',c:'#f59e0b',bg:'#fffbeb'},
  {name:'Redis',c:'#dc382d',bg:'#fff0ef'},
  {name:'Vercel',c:'#111',bg:'#f0f0f0'},
  {name:'AWS',c:'#ff9900',bg:'#fff6e5'},
  {name:'Docker',c:'#2496ed',bg:'#e8f3fd'},
  {name:'Figma',c:'#f24e1e',bg:'#fff0ec'},
  {name:'REST API',c:'#10b981',bg:'#ecfdf5'},
  {name:'GraphQL',c:'#e10098',bg:'#fce8f5'},
]

export default function Tech(){
  return(
    <>
      <style>{`
        .tech-section{padding:clamp(4rem,8vw,7rem) 0;background:#f8f6f2}
        .tech-header{display:flex;flex-direction:column;gap:1rem;margin-bottom:3rem}
        .tech-h2{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.8rem,1rem + 2vw,3.2rem);font-weight:300;color:#111}
        .tech-h2 em{font-style:italic;color:#0ea5e9}
        .tech-eyebrow{font-family:'DM Sans',system-ui,sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#0ea5e9}
        .tech-grid{display:flex;flex-wrap:wrap;gap:0.7rem}
        .tech-pill{
          display:flex;align-items:center;gap:0.5rem;
          padding:0.55rem 1.1rem;
          border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:600;
          border:1.5px solid transparent;
          transition:all 220ms cubic-bezier(0.16,1,0.3,1);
          cursor:default;
        }
        .tech-pill:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.08);filter:brightness(0.95)}
        .tech-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
      `}</style>
      <section className="tech-section">
        <div className="wrap">
          <div className="tech-header">
            <p className="tech-eyebrow">Tech Stack</p>
            <h2 className="tech-h2">Tools we<br/><em>master daily.</em></h2>
          </div>
          <div className="tech-grid">
            {stack.map(({name,c,bg})=>(
              <span key={name} className="tech-pill" style={{background:bg,color:c,borderColor:bg}}>
                <span className="tech-dot" style={{background:c}}/>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
