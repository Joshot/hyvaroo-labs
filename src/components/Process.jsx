const steps = [
  { n:'01', title:'Discovery', desc:'We dive deep into your business goals, users, and market. No assumptions, no templates. Every solution starts from real understanding.' },
  { n:'02', title:'Strategy & Architecture', desc:'We map out the technical roadmap and design system before writing a single line of code. Decisions made here save weeks later.' },
  { n:'03', title:'Design & Build', desc:'Iterative development with continuous feedback. You see progress weekly, not just at the end. Quality is non-negotiable at every sprint.' },
  { n:'04', title:'Launch & Grow', desc:'We handle deployment, performance tuning, and post-launch monitoring. Then we stay on as your long-term technical partner.' },
]

export default function Process() {
  return (
    <>
      <style>{`
        .proc-section{
          padding:clamp(5rem,10vw,9rem) 0;
          background:linear-gradient(180deg,#0f0d08 0%,#0c0a06 100%);
          border-top:1px solid rgba(184,150,90,0.1);
        }
        .proc-header{display:flex;flex-direction:column;gap:1rem;margin-bottom:5rem}
        .proc-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,1.2rem + 3.5vw,5rem);
          font-weight:300;line-height:0.95;color:#faf8f3;
        }
        .proc-h2 em{font-style:italic}
        .proc-grid{display:grid;gap:1.5rem}
        @media(min-width:768px){.proc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1100px){.proc-grid{grid-template-columns:repeat(4,1fr)}}
        .proc-card{
          padding:2rem;
          border:1px solid rgba(184,150,90,0.1);
          border-radius:20px;
          background:#0f0d08;
          display:flex;flex-direction:column;gap:1.5rem;
          position:relative;overflow:hidden;
          transition:all 300ms cubic-bezier(0.16,1,0.3,1);
        }
        .proc-card:hover{
          border-color:rgba(184,150,90,0.3);
          background:#141008;
          transform:translateY(-4px);
          box-shadow:0 20px 60px rgba(0,0,0,0.4),0 0 0 1px rgba(184,150,90,0.1);
        }
        .proc-num-wrap{
          width:48px;height:48px;
          border-radius:50%;
          border:1px solid rgba(184,150,90,0.25);
          display:flex;align-items:center;justify-content:center;
          background:rgba(184,150,90,0.05);
        }
        .proc-num{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:1.1rem;font-weight:600;
          background:linear-gradient(135deg,#b8965a,#d4aa6a);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .proc-title{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.2rem,1rem + 0.6vw,1.5rem);
          font-weight:500;color:#faf8f3;
        }
        .proc-desc{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.86rem;color:rgba(232,224,208,0.5);line-height:1.78;
        }
      `}</style>

      <section id="process" className="proc-section">
        <div className="wrap">
          <div className="proc-header">
            <span className="eyebrow">How We Work</span>
            <h2 className="proc-h2">A process built<br/><em>for excellence.</em></h2>
            <span className="gold-line"/>
          </div>
          <div className="proc-grid">
            {steps.map(({n,title,desc})=>(
              <div key={n} className="proc-card">
                <div className="proc-num-wrap"><span className="proc-num">{n}</span></div>
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
