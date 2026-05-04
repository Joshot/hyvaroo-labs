import { Laptop, Layout, PenTool, Gauge } from 'lucide-react'

const services = [
  { icon: Laptop, title: 'Web Development', desc: 'Robust websites and custom digital products engineered for reliability and long-term growth.' },
  { icon: Layout, title: 'Frontend Engineering', desc: 'High-quality interfaces with clean interactions, modern component systems, and polished detail.' },
  { icon: PenTool, title: 'UI/UX Design', desc: 'Minimal and conversion-aware design that makes products easier to trust, use, and scale.' },
  { icon: Gauge, title: 'Performance Optimization', desc: 'Faster loading, cleaner rendering, and better front-end performance without sacrificing quality.' },
]

export default function Services() {
  return (
    <section id="services" style={{padding:'clamp(4rem,10vw,6rem) 0'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Services</span>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.05,letterSpacing:'-0.04em',maxWidth:'14ch',marginTop:'var(--space-4)'}}>Focused capabilities that move products forward.</h2>
          </div>
          <p style={{maxWidth:'52ch',color:'var(--color-text-muted)',marginTop:0}}>We keep the offer clear: build, refine, and optimize the digital layer that supports growth.</p>
        </div>
        <div className="services-grid">
          {services.map(({icon:Icon,title,desc}) => (
            <article key={title} className="glass-card">
              <div style={{width:48,height:48,display:'inline-grid',placeItems:'center',marginBottom:'var(--space-5)',borderRadius:16,background:'color-mix(in srgb,var(--color-accent-start) 14%,var(--color-surface))',color:'var(--color-text)',border:'1px solid var(--color-accent-border)'}}>
                <Icon size={22}/>
              </div>
              <h3 style={{fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>{title}</h3>
              <p style={{marginTop:'var(--space-3)',color:'var(--color-text-muted)'}}>{desc}</p>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .eyebrow{display:inline-flex;align-items:center;padding:0.45rem 0.85rem;border-radius:var(--radius-full);background:color-mix(in srgb,var(--color-surface) 84%,var(--color-accent-start) 16%);border:1px solid var(--color-accent-border);color:var(--color-text);font-size:var(--text-xs);letter-spacing:0.08em;text-transform:uppercase;font-weight:700;}
        .section-head{display:flex;flex-direction:column;gap:var(--space-4);margin-bottom:var(--space-10);}
        .glass-card{padding:var(--space-6);border-radius:24px;background:color-mix(in srgb,var(--color-surface) 88%,transparent);border:1px solid var(--color-border);box-shadow:var(--shadow-sm);transition:transform var(--transition),border-color var(--transition),box-shadow var(--transition);}
        .glass-card:hover{transform:translateY(-4px);border-color:var(--color-accent-border);box-shadow:var(--shadow-md);}
        .services-grid{display:grid;gap:var(--space-4);}
        @media(min-width:768px){.services-grid{grid-template-columns:repeat(2,1fr);}}
        @media(min-width:980px){.services-grid{grid-template-columns:repeat(4,1fr);}.section-head{flex-direction:row;justify-content:space-between;align-items:flex-end;}.section-head p{margin-top:0;}}
      `}</style>
    </section>
  )
}