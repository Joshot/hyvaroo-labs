import { MessageCircleMore } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" style={{padding:'clamp(4rem,10vw,6rem) 0'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div style={{position:'relative',overflow:'hidden',padding:'clamp(1.5rem,4vw,2.75rem)',borderRadius:30,background:'linear-gradient(180deg,color-mix(in srgb,var(--color-surface) 92%,transparent),color-mix(in srgb,var(--color-surface-2) 92%,transparent))',border:'1px solid var(--color-border)',boxShadow:'var(--shadow-md)'}}>
          <div style={{position:'absolute',inset:'auto auto -25% 60%',width:280,height:280,borderRadius:'50%',background:'radial-gradient(circle,rgba(79,140,255,0.25),transparent 65%)',filter:'blur(12px)',pointerEvents:'none'}} aria-hidden="true"/>
          <div className="cta-grid" style={{position:'relative',zIndex:1}}>
            <div>
              <span className="eyebrow">Start the conversation</span>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.05,letterSpacing:'-0.04em',maxWidth:'13ch',marginTop:'var(--space-4)'}}>Let's build something great together</h2>
              <p style={{maxWidth:'52ch',color:'var(--color-text-muted)',marginTop:'var(--space-5)'}}>For founders and teams that need a reliable software partner — the next step is a direct conversation.</p>
            </div>
            <div style={{padding:'var(--space-6)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 86%,transparent)',border:'1px solid var(--color-border)',display:'flex',flexDirection:'column',justifyContent:'space-between',gap:'var(--space-6)'}}>
              <div>
                <span style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>Primary contact</span>
                <strong style={{display:'block',marginTop:'var(--space-2)',fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>WhatsApp-first workflow</strong>
                <p style={{marginTop:'var(--space-3)',color:'var(--color-text-muted)'}}>Fastest route for discovery, scope discussion, and next-step planning.</p>
              </div>
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer"
                style={{minHeight:48,padding:'0.9rem 1.3rem',display:'inline-flex',alignItems:'center',justifyContent:'center',gap:6,borderRadius:'var(--radius-full)',fontSize:'var(--text-sm)',fontWeight:700,background:'var(--gradient-accent)',color:'white',boxShadow:'var(--shadow-lg)',textDecoration:'none'}}>
                <MessageCircleMore size={18}/>Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`.cta-grid{display:grid;gap:var(--space-8);}@media(min-width:980px){.cta-grid{grid-template-columns:1.1fr 0.9fr;}}`}</style>
    </section>
  )
}