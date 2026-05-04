export default function About() {
  return (
    <section id="about" style={{padding:'clamp(4rem,10vw,6rem) 0'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div style={{padding:'clamp(1.5rem,4vw,2.75rem)',borderRadius:30,background:'linear-gradient(180deg,color-mix(in srgb,var(--color-surface) 92%,transparent),color-mix(in srgb,var(--color-surface-2) 92%,transparent))',border:'1px solid var(--color-border)',boxShadow:'var(--shadow-md)'}}>
          <div className="about-grid">
            <div>
              <span className="eyebrow">About</span>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--text-2xl)',lineHeight:1.05,letterSpacing:'-0.04em',maxWidth:'15ch',marginTop:'var(--space-4)'}}>Technology built to create trust fast.</h2>
              <p style={{maxWidth:'54ch',color:'var(--color-text-muted)',marginTop:'var(--space-5)'}}>Hyvaroo Labs is a technology-focused software house dedicated to building scalable and high-performance digital products.</p>
              <p style={{maxWidth:'54ch',color:'var(--color-text-muted)',marginTop:'var(--space-4)'}}>The name combines <em>high value</em> with <em>route</em> — a clear signal that every build should help a business move forward with more confidence.</p>
            </div>
            <div style={{display:'grid',gap:'var(--space-4)'}}>
              {[
                {title:'High-value thinking',desc:'Solutions are designed to support business outcomes, not just visual polish.'},
                {title:'Forward momentum',desc:'Each product is shaped for scale, speed, and better long-term decisions.'},
              ].map(s => (
                <div key={s.title} style={{padding:'var(--space-5)',borderRadius:22,background:'color-mix(in srgb,var(--color-surface) 86%,transparent)',border:'1px solid var(--color-border)'}}>
                  <strong style={{fontSize:'var(--text-lg)',letterSpacing:'-0.03em'}}>{s.title}</strong>
                  <p style={{color:'var(--color-text-muted)',marginTop:'var(--space-2)'}}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`.about-grid{display:grid;gap:var(--space-8);align-items:start;}@media(min-width:980px){.about-grid{grid-template-columns:1.1fr 0.9fr;}}`}</style>
    </section>
  )
}