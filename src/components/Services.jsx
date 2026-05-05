import { Code2, Layers, Pen, Zap, Globe, ShieldCheck } from 'lucide-react'

const svcs = [
  { n:'01', Icon:Code2, title:'Web Development', tag:'Full-Stack', desc:'End-to-end digital products engineered for speed, reliability, and long-term scalability. From architecture to deployment.' },
  { n:'02', Icon:Layers, title:'Frontend Engineering', tag:'React & Next.js', desc:'Polished component systems and interfaces built with clean code, modern tooling, and precision interaction design.' },
  { n:'03', Icon:Pen, title:'UI / UX Design', tag:'Product Design', desc:'Strategy-led design that converts. Minimal, intentional, and tuned to the expectations of a global audience.' },
  { n:'04', Icon:Zap, title:'Performance & Scale', tag:'Optimization', desc:'Architecture audits, CDN strategy, and front-end performance that meets enterprise-grade standards under real load.' },
  { n:'05', Icon:Globe, title:'Digital Strategy', tag:'Consulting', desc:'Business-aligned technology roadmaps. We help you decide what to build, when to build it, and how to measure success.' },
  { n:'06', Icon:ShieldCheck, title:'Maintenance & Support', tag:'Long-term', desc:'Ongoing technical partnership after launch. Bug fixes, updates, monitoring, and performance improvements.' },
]

export default function Services() {
  return (
    <>
      <style>{`
        .svc-section{
          padding:clamp(5rem,10vw,9rem) 0;
          background:#0c0a06;
          border-top:1px solid rgba(184,150,90,0.1);
        }
        .svc-top{
          display:flex;justify-content:space-between;
          align-items:flex-end;flex-wrap:wrap;
          gap:2rem;margin-bottom:5rem;
        }
        .svc-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.2rem,1.2rem + 3.5vw,5rem);
          font-weight:300;line-height:0.95;
          color:#faf8f3;max-width:12ch;
        }
        .svc-h2 em{font-style:italic}
        .svc-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(0.9rem,0.85rem + 0.25vw,1.05rem);
          color:rgba(232,224,208,0.5);
          max-width:36ch;line-height:1.75;
        }
        .svc-grid{
          display:grid;gap:1px;
          background:rgba(184,150,90,0.08);
          border:1px solid rgba(184,150,90,0.1);
          border-radius:24px;overflow:hidden;
        }
        @media(min-width:768px){.svc-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1100px){.svc-grid{grid-template-columns:repeat(3,1fr)}}
        .svc-card{
          padding:clamp(1.75rem,3.5vw,2.5rem);
          background:#0f0d08;
          display:flex;flex-direction:column;gap:1.25rem;
          transition:background 300ms;
          cursor:default;position:relative;overflow:hidden;
        }
        .svc-card::after{
          content:'';
          position:absolute;inset:0;
          background:radial-gradient(ellipse at 0% 0%,rgba(184,150,90,0.06) 0%,transparent 60%);
          opacity:0;transition:opacity 400ms;
        }
        .svc-card:hover{background:#141008}
        .svc-card:hover::after{opacity:1}
        .svc-card-top{display:flex;justify-content:space-between;align-items:flex-start}
        .svc-icon{
          width:44px;height:44px;
          display:flex;align-items:center;justify-content:center;
          border:1px solid rgba(184,150,90,0.2);
          border-radius:12px;
          background:rgba(184,150,90,0.06);
          color:#b8965a;
          flex-shrink:0;
        }
        .svc-num{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;
          letter-spacing:0.1em;color:rgba(184,150,90,0.4);
        }
        .svc-tag{
          display:inline-block;
          padding:0.2rem 0.7rem;
          border-radius:9999px;
          border:1px solid rgba(184,150,90,0.2);
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;font-weight:600;letter-spacing:0.1em;
          text-transform:uppercase;color:rgba(184,150,90,0.7);
        }
        .svc-title{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.25rem,1rem + 0.8vw,1.6rem);
          font-weight:400;color:#faf8f3;line-height:1.1;
        }
        .svc-desc{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;color:rgba(232,224,208,0.5);
          line-height:1.78;
        }
      `}</style>

      <section id="services" className="svc-section">
        <div className="wrap">
          <div className="svc-top">
            <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <span className="eyebrow">What We Build</span>
              <h2 className="svc-h2">Services that<br/><em>move markets.</em></h2>
              <span className="gold-line"/>
            </div>
            <p className="svc-sub">From concept to launch and beyond — every service we offer is built around one principle: your product deserves to be exceptional.</p>
          </div>
          <div className="svc-grid">
            {svcs.map(({n,Icon,title,tag,desc})=>(
              <div key={title} className="svc-card">
                <div className="svc-card-top">
                  <div className="svc-icon"><Icon size={18}/></div>
                  <span className="svc-num">{n}</span>
                </div>
                <div>
                  <span className="svc-tag">{tag}</span>
                  <h3 className="svc-title" style={{marginTop:'0.6rem'}}>{title}</h3>
                </div>
                <p className="svc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
