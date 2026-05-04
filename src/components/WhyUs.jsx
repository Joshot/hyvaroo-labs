import { Cpu, Layers3, Sparkles, Zap } from 'lucide-react'

const reasons = [
  {icon:Cpu,    title:'High performance code',  desc:'Lean front-end output and implementation choices that keep products fast and stable.'},
  {icon:Layers3,title:'Scalable architecture',   desc:'Technical foundations that support future features without forcing rebuilds too early.'},
  {icon:Sparkles,title:'Clean UI/UX',            desc:'Interfaces that feel premium, readable, and globally aligned with modern startup standards.'},
  {icon:Zap,    title:'Fast delivery',            desc:'Focused scope and practical execution to get working products into motion faster.'},
]

export default function WhyUs() {
  return (
    <section id="why-us" style={{padding:'clamp(4rem,10vw,6rem) 0'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Why choose us</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.05,letterSpacing:'-0.04em',maxWidth:'15ch',marginTop:'var(--space-4)'}}>Built for teams that care about speed and quality.</h2>
          </div>
          <p style={{maxWidth:'52ch',color:'var(--color-text-muted)',marginTop:0}}>Credible execution, thoughtful product detail, and a delivery style that feels modern from day one.</p>
        </div>
        <div className="choose-grid">
          {reasons.map(({icon:Icon,title,desc}) => (
            <article key={title} className="glass-card">
              <h3 style={{display:'flex',alignItems:'center',gap:'var(--space-3)',fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>
                <Icon size={20} style={{flexShrink:0,color:'var(--color-accent-start)'}}/>{title}
              </h3>
              <p style={{marginTop:'var(--space-3)',color:'var(--color-text-muted)'}}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .choose-grid{display:grid;gap:var(--space-4);}
        @media(min-width:768px){.choose-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:980px){.choose-grid{grid-template-columns:repeat(4,1fr);}}
      `}</style>
    </section>
  )
}