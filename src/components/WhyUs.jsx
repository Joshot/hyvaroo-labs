import { ArrowUpRight } from 'lucide-react'

const points = [
  {title:'High-performance engineering',desc:'Lean, fast, and stable code that holds up under real usage — not just during development.'},
  {title:'Strategic UI/UX',desc:'Interfaces designed around user intent, not decoration. Every element earns its place.'},
  {title:'Scalable from day one',desc:'Architecture decisions that let products grow without expensive rewrites.'},
  {title:'Delivery with discipline',desc:'Scoped clearly, executed precisely. No scope creep, no missed timelines.'},
  {title:'Premium attention to detail',desc:'The difference between good and exceptional is in the small decisions — and we never skip them.'},
  {title:'Partnership mentality',desc:'We treat every project as if it's our own product — with care, ownership, and long-term thinking.'},
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{padding:'clamp(5rem,10vw,8rem) 0',background:'var(--ivory-warm)',borderTop:'1px solid var(--ivory-border)'}}>
      <div className="wrap">
        <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)',marginBottom:'var(--sp-16)'}}>
          <span className="eyebrow">Why Hyvaroo</span>
          <h2 style={{fontSize:'var(--tx-xl)',fontWeight:300,maxWidth:'14ch'}}>The standard<br/><em>we hold ourselves to.</em></h2>
          <span className="gold-rule"/>
        </div>

        <div className="why-grid">
          {points.map(({title,desc}) => (
            <div key={title} style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)',padding:'var(--sp-6)',border:'1px solid var(--ivory-border)',borderRadius:'var(--r-lg)',background:'var(--ivory)',transition:'all var(--t) var(--ease)'}} className="why-card">
              <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'var(--sp-3)'}}>
                <h3 style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-md)',fontWeight:500,lineHeight:1.2}}>{title}</h3>
                <ArrowUpRight size={15} style={{color:'var(--gold)',flexShrink:0,marginTop:4}}/>
              </div>
              <p style={{color:'var(--text-2)',fontSize:'var(--tx-sm)',lineHeight:1.75}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .why-grid{display:grid;gap:var(--sp-4);}
        @media(min-width:680px){.why-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:980px){.why-grid{grid-template-columns:repeat(3,1fr);}}
        .why-card:hover{background:var(--ivory-warm)!important;box-shadow:0 6px 28px rgba(26,22,16,0.06),0 1px 0 rgba(184,150,90,0.15)!important;}
      `}</style>
    </section>
  )
}