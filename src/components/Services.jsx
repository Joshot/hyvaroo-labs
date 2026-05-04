import { Code2, Layers, Pen, Zap } from 'lucide-react'

const svcs = [
  {n:'01',icon:Code2,  title:'Web Development',      desc:'End-to-end digital products engineered for speed, reliability, and long-term scalability with meticulous technical detail.'},
  {n:'02',icon:Layers, title:'Frontend Engineering',  desc:'Component systems and polished interfaces built with clean code, modern tooling, and precision interaction design.'},
  {n:'03',icon:Pen,    title:'UI/UX Design',          desc:'Strategy-led design that converts — minimal, intentional, and tuned to the expectations of a global audience.'},
  {n:'04',icon:Zap,    title:'Performance & Scale',   desc:'Architecture audits, optimizations, and front-end performance that meets enterprise-grade standards under real load.'},
]

export default function Services() {
  return (
    <section id="services" style={{padding:'clamp(5rem,10vw,8rem) 0',borderTop:'1px solid var(--ivory-border)'}}>
      <div className="wrap">

        <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)',marginBottom:'var(--sp-16)'}}>
          <span className="eyebrow">What We Do</span>
          <h2 style={{fontSize:'var(--tx-xl)',fontWeight:300,maxWidth:'14ch'}}>Services built<br/><em>for growth.</em></h2>
          <span className="gold-rule"/>
        </div>

        <div style={{display:'grid',gap:0,border:'1px solid var(--ivory-border)',borderRadius:'var(--r-xl)',overflow:'hidden'}} className="svc-grid">
          {svcs.map(({n,icon:Icon,title,desc},i) => (
            <div key={title} style={{padding:'clamp(1.5rem,4vw,2.5rem)',borderBottom: i < svcs.length-1 ? '1px solid var(--ivory-border)' : 'none',display:'grid',gap:'var(--sp-5)',transition:'background var(--t) var(--ease)'}} className="svc-row">
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'var(--sp-4)'}}>
                <div style={{display:'flex',alignItems:'center',gap:'var(--sp-5)'}}>
                  <span style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-xs)',fontWeight:600,letterSpacing:'0.1em',color:'var(--gold)',minWidth:24}}>{n}</span>
                  <h3 style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-lg)',fontWeight:400}}>{title}</h3>
                </div>
                <div style={{width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid var(--ivory-border)',borderRadius:'50%',flexShrink:0,color:'var(--gold)'}}>
                  <Icon size={17}/>
                </div>
              </div>
              <p style={{color:'var(--text-2)',fontSize:'var(--tx-base)',maxWidth:'62ch',paddingLeft:'calc(24px + var(--sp-5))'}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`.svc-row:hover{background:var(--ivory-warm)!important;}`}</style>
    </section>
  )
}