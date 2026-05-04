import { ArrowUpRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" style={{position:'relative',overflow:'hidden',minHeight:'96vh',display:'flex',flexDirection:'column',justifyContent:'center',background:'var(--ivory)'}}>

      {/* Background texture lines */}
      <div aria-hidden="true" style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(184,150,90,0.06) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(184,150,90,0.06) 80px)',backgroundSize:'80px 80px',pointerEvents:'none'}} />

      {/* Soft radial light */}
      <div aria-hidden="true" style={{position:'absolute',top:'-10%',right:'-5%',width:'55%',height:'70%',background:'radial-gradient(ellipse,rgba(212,170,106,0.12) 0%,transparent 65%)',pointerEvents:'none'}} />

      <div className="wrap" style={{position:'relative',zIndex:1,paddingTop:'var(--sp-16)',paddingBottom:'var(--sp-16)'}}>

        <div style={{display:'grid',gap:'var(--sp-6)',maxWidth:'820px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'var(--sp-4)'}}>
            <span className="eyebrow">Est. 2024</span>
            <span style={{display:'block',width:32,height:1,background:'linear-gradient(90deg,var(--gold),transparent)'}} />
            <span className="eyebrow">Jakarta, Indonesia</span>
          </div>

          <h1 style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-hero)',lineHeight:0.95,letterSpacing:'-0.04em',fontWeight:300,color:'var(--text)'}}>
            We craft<br/>
            <em style={{fontStyle:'italic',fontWeight:300}}>exceptional</em><br/>
            <span style={{color:'var(--gold)',fontWeight:400}}>digital work.</span>
          </h1>

          <p style={{fontSize:'var(--tx-md)',color:'var(--text-2)',maxWidth:'52ch',fontWeight:300,lineHeight:1.8,marginTop:'var(--sp-2)'}}>
            Hyvaroo Labs is a premium software house. We build high-performance web products for founders and companies who demand more than ordinary.
          </p>

          <div style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-3)',marginTop:'var(--sp-4)'}}>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start a Project <ArrowUpRight size={16}/>
            </a>
            <a href="#portfolio" className="btn-outline">View Work</a>
          </div>

          <div style={{display:'flex',flexWrap:'wrap',gap:'var(--sp-8)',marginTop:'var(--sp-6)',paddingTop:'var(--sp-6)',borderTop:'1px solid var(--ivory-border)'}}>
            {[['Scalable','Architecture'],['Premium','UI/UX'],['Fast','Delivery'],['Modern','Standards']].map(([a,b]) => (
              <div key={a}>
                <div style={{fontFamily:'var(--f-display)',fontSize:'var(--tx-lg)',fontWeight:600,lineHeight:1,color:'var(--text)'}}>{a}</div>
                <div style={{fontSize:'var(--tx-xs)',fontWeight:600,letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)',marginTop:4}}>{b}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating index number */}
        <div aria-hidden="true" style={{position:'absolute',right:0,top:'50%',transform:'translateY(-50%)',display:'none',flexDirection:'column',alignItems:'center',gap:'var(--sp-3)'}} className="hero-index">
          <span style={{writingMode:'vertical-rl',fontFamily:'var(--f-body)',fontSize:'var(--tx-xs)',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--text-4)'}}>Scroll to explore</span>
          <ArrowDown size={14} style={{color:'var(--text-4)'}}/>
        </div>
      </div>

      {/* Large faded number */}
      <div aria-hidden="true" style={{position:'absolute',right:'-2%',bottom:'-4%',fontFamily:'var(--f-display)',fontSize:'clamp(8rem,18vw,22rem)',fontWeight:700,lineHeight:1,color:'transparent',WebkitTextStroke:'1px rgba(184,150,90,0.12)',pointerEvents:'none',userSelect:'none',letterSpacing:'-0.06em'}}>01</div>

      <style>{`@media(min-width:900px){.hero-index{display:flex!important;}}`}</style>
    </section>
  )
}