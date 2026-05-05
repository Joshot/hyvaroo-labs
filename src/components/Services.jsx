import { Code2, Layers, Pen, Zap, Globe, ShieldCheck } from 'lucide-react'

const svcs = [
  {Icon:Code2,  title:'Web Development',    tag:'Full-Stack',  desc:'End-to-end products engineered for speed, reliability, and long-term scale. From architecture to launch.',            bg:'#fff0eb',ic:'#ff6b35',border:'#ffd5c4'},
  {Icon:Layers, title:'Frontend Engineering',tag:'React/Next',  desc:'Component systems and polished interfaces built with clean code, modern tooling, and precision interaction.',         bg:'#eef2ff',ic:'#4338ca',border:'#c7d2fe'},
  {Icon:Pen,    title:'UI / UX Design',      tag:'Product',     desc:'Strategy-led design that converts. Minimal, intentional, tuned to the expectations of a global audience.',           bg:'#ecfdf5',ic:'#10b981',border:'#a7f3d0'},
  {Icon:Zap,    title:'Performance & Scale', tag:'Optimization',desc:'Architecture audits, CDN strategy, and front-end performance that meets enterprise-grade standards.',                 bg:'#fffbeb',ic:'#f59e0b',border:'#fde68a'},
  {Icon:Globe,  title:'Digital Strategy',    tag:'Consulting',  desc:'Business-aligned technology roadmaps. We help you decide what to build, when to build it, and how to grow.',       bg:'#f0f9ff',ic:'#0ea5e9',border:'#bae6fd'},
  {Icon:ShieldCheck,title:'Maintenance & Support',tag:'Long-term',desc:'Ongoing technical partnership after launch. Bug fixes, updates, monitoring, and continuous improvements.',      bg:'#fff1f2',ic:'#f43f5e',border:'#fecdd3'},
]

export default function Services() {
  return (
    <>
      <style>{`
        .svc-section{padding:clamp(5rem,10vw,9rem) 0;background:#fefcf8}
        .svc-top{
          display:grid;gap:3rem;
          margin-bottom:4.5rem;
        }
        @media(min-width:900px){.svc-top{grid-template-columns:1fr 1fr;align-items:end}}
        .svc-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,1.2rem + 3vw,4.8rem);
          font-weight:300;line-height:0.94;color:#111;
        }
        .svc-h2 em{font-style:italic;color:#ff6b35}
        .svc-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:1rem;color:rgba(17,17,17,0.5);
          max-width:38ch;line-height:1.78;
        }
        .svc-grid{
          display:grid;gap:1.25rem;
        }
        @media(min-width:680px){.svc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1080px){.svc-grid{grid-template-columns:repeat(3,1fr)}}
        .svc-card{
          padding:2rem;
          border-radius:20px;
          border:1.5px solid;
          background:#fff;
          display:flex;flex-direction:column;gap:1.25rem;
          transition:all 280ms cubic-bezier(0.16,1,0.3,1);
          cursor:default;
        }
        .svc-card:hover{transform:translateY(-6px);box-shadow:0 20px 60px rgba(0,0,0,0.08)}
        .svc-card-top{display:flex;justify-content:space-between;align-items:flex-start}
        .svc-icon-wrap{
          width:46px;height:46px;
          border-radius:14px;
          display:flex;align-items:center;justify-content:center;
          flex-shrink:0;
        }
        .svc-tag{
          padding:0.2rem 0.65rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;
        }
        .svc-title{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.2rem,1rem + 0.7vw,1.55rem);
          font-weight:500;color:#111;line-height:1.1;
        }
        .svc-desc{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;color:rgba(17,17,17,0.5);line-height:1.78;
        }
      `}</style>
      <section id="services" className="svc-section">
        <div className="wrap">
          <div className="svc-top">
            <div>
              <p style={{fontFamily:'DM Sans,system-ui,sans-serif',fontSize:'0.7rem',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:'#ff6b35',marginBottom:'1rem'}}>What We Build</p>
              <h2 className="svc-h2">Services built<br/>for <em>growth.</em></h2>
            </div>
            <p className="svc-sub" style={{paddingBottom:'0.5rem'}}>From concept to launch and beyond. Every service we offer is built around one principle: your product deserves to be exceptional.</p>
          </div>
          <div className="svc-grid">
            {svcs.map(({Icon,title,tag,desc,bg,ic,border})=>(
              <div key={title} className="svc-card" style={{borderColor:border}}>
                <div className="svc-card-top">
                  <div className="svc-icon-wrap" style={{background:bg}}><Icon size={20} color={ic}/></div>
                  <span className="svc-tag" style={{background:bg,color:ic}}>{tag}</span>
                </div>
                <h3 className="svc-title">{title}</h3>
                <p className="svc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
