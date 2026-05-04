import { MessageCircle, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" style={{padding:'clamp(5rem,10vw,8rem) 0',borderTop:'1px solid var(--ivory-border)'}}>
      <div className="wrap">
        <div style={{display:'grid',gap:'var(--sp-3)',textAlign:'center',maxWidth:680,marginInline:'auto',marginBottom:'var(--sp-16)'}}>
          <span className="eyebrow">Start a Project</span>
          <h2 style={{fontSize:'var(--tx-xl)',fontWeight:300}}>Ready to build<br/><em>something exceptional?</em></h2>
          <span className="gold-rule gold-rule-center"/>
          <p style={{color:'var(--text-2)',fontSize:'var(--tx-md)',fontWeight:300,lineHeight:1.8,maxWidth:'44ch',marginInline:'auto'}}>For founders and teams that need a premium software partner — let's talk about what you're building.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-3)',justifyContent:'center',marginTop:'var(--sp-4)'}}>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={16}/>Chat on WhatsApp
            </a>
            <a href="mailto:hello@hyvaroolabs.com" className="btn-outline">
              <Mail size={16}/>Send an Email
            </a>
          </div>
        </div>

        {/* Info row */}
        <div style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-4)',justifyContent:'center',paddingTop:'var(--sp-12)',borderTop:'1px solid var(--ivory-border)'}}>
          {[
            {label:'Based in',value:'Jakarta, Indonesia'},
            {label:'Response time',value:'Under 24 hours'},
            {label:'Engagement',value:'Project-based'},
            {label:'Language',value:'ID & EN'},
          ].map(({label,value}) => (
            <div key={label} style={{display:'flex',flexDirection:'column',gap:'var(--sp-1)',padding:'var(--sp-5) var(--sp-6)',border:'1px solid var(--ivory-border)',borderRadius:'var(--r-lg)',background:'var(--ivory-warm)',minWidth:140,textAlign:'center'}}>
              <span style={{fontSize:'var(--tx-xs)',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)'}}>{label}</span>
              <span style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-md)',fontWeight:500,color:'var(--text)'}}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}