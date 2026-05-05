const steps=[
  {n:'01',title:'Discovery',desc:'We dive deep into your business goals, users, and market. No assumptions. Every solution starts from real understanding.',c:'#ff6b35',bg:'#fff0eb'},
  {n:'02',title:'Strategy & Architecture',desc:'We map out the technical roadmap and design system before writing a single line of code. Decisions here save weeks later.',c:'#4338ca',bg:'#eef2ff'},
  {n:'03',title:'Design & Build',desc:'Iterative development with weekly feedback. You see progress at every sprint. Quality is non-negotiable throughout.',c:'#10b981',bg:'#ecfdf5'},
  {n:'04',title:'Launch & Grow',desc:'We handle deployment, performance tuning, and post-launch monitoring. Then we stay on as your long-term partner.',c:'#f59e0b',bg:'#fffbeb'},
]

export default function Process(){
  return(
    <>
      <style>{`
        .proc-section{padding:clamp(5rem,10vw,9rem) 0;background:#f8f6f2}
        .proc-header{display:flex;flex-direction:column;gap:1rem;margin-bottom:4.5rem}
        .proc-h2{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(2.2rem,1.2rem + 3vw,4.8rem);font-weight:300;line-height:0.94;color:#111}
        .proc-h2 em{font-style:italic;color:#10b981}
        .proc-eyebrow{font-family:'DM Sans',system-ui,sans-serif;font-size:0.7rem;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#10b981}
        .proc-grid{display:grid;gap:1.25rem}
        @media(min-width:680px){.proc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1080px){.proc-grid{grid-template-columns:repeat(4,1fr)}}
        .proc-card{
          padding:2rem;
          border-radius:20px;
          background:#fff;
          border:1.5px solid;
          display:flex;flex-direction:column;gap:1.5rem;
          transition:all 280ms cubic-bezier(0.16,1,0.3,1);
          cursor:default;
        }
        .proc-card:hover{transform:translateY(-6px);box-shadow:0 20px 56px rgba(0,0,0,0.07)}
        .proc-num-ring{
          width:50px;height:50px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          border:2px solid;
        }
        .proc-num{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-weight:600}
        .proc-title{font-family:'Cormorant Garamond',Georgia,serif;font-size:clamp(1.2rem,1rem + 0.6vw,1.45rem);font-weight:500;color:#111;line-height:1.15}
        .proc-desc{font-family:'DM Sans',system-ui,sans-serif;font-size:0.88rem;color:rgba(17,17,17,0.5);line-height:1.78}
      `}</style>
      <section id="process" className="proc-section">
        <div className="wrap">
          <div className="proc-header">
            <p className="proc-eyebrow">How We Work</p>
            <h2 className="proc-h2">A process built<br/>for <em>excellence.</em></h2>
          </div>
          <div className="proc-grid">
            {steps.map(({n,title,desc,c,bg})=>(
              <div key={n} className="proc-card" style={{borderColor:bg.replace('eb','c4').replace('ff','d0')}}>
                <div className="proc-num-ring" style={{borderColor:c,background:bg}}>
                  <span className="proc-num" style={{color:c}}>{n}</span>
                </div>
                <h3 className="proc-title">{title}</h3>
                <p className="proc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
