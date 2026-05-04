import { Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{padding:'var(--space-10) 0 var(--space-12)',borderTop:'1px solid color-mix(in srgb,var(--color-border) 80%,transparent)'}}>
      <div style={{width:'min(calc(100% - 2rem),var(--content-default))',marginInline:'auto'}}>
        <div className="footer-grid">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'var(--space-3)',fontWeight:800,letterSpacing:'-0.03em',marginBottom:'var(--space-4)'}}>
              <span style={{background:'var(--gradient-accent)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',fontSize:'var(--text-lg)'}}>Hyvaroo Labs</span>
            </div>
            <p style={{color:'var(--color-text-muted)',maxWidth:'36ch'}}>High-value technology for businesses that need better digital direction and stronger execution.</p>
          </div>
          <div style={{display:'grid',gap:'var(--space-3)'}}>
            <strong>Contact</strong>
            <a href="mailto:hello@hyvaroolabs.com" style={{color:'var(--color-text-muted)'}}>hello@hyvaroolabs.com</a>
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" style={{color:'var(--color-text-muted)'}}>+62 851-5961-1202</a>
          </div>
          <div style={{display:'grid',gap:'var(--space-3)'}}>
            <strong>Follow</strong>
            <div style={{display:'flex',flexWrap:'wrap',gap:'var(--space-2)'}}>
              {[
                {href:'https://linkedin.com',icon:Linkedin,label:'LinkedIn'},
                {href:'https://github.com',icon:Github,label:'GitHub'},
                {href:'https://instagram.com',icon:Instagram,label:'Instagram'},
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{minHeight:40,padding:'0.55rem 0.9rem',display:'inline-flex',alignItems:'center',gap:6,borderRadius:'var(--radius-full)',border:'1px solid var(--color-border)',background:'var(--color-surface)',color:'var(--color-text-muted)',fontSize:'var(--text-sm)'}}>
                  <s.icon size={15}/>{s.label}
                </a>
              ))}
            </div>
            <p style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)',marginTop:'var(--space-2)'}}>© 2026 Hyvaroo Labs. Built with clarity and momentum.</p>
          </div>
        </div>
      </div>
      <style>{`.footer-grid{display:grid;gap:var(--space-8);}@media(min-width:768px){.footer-grid{grid-template-columns:1.2fr 0.8fr 0.8fr;align-items:start;}}`}</style>
    </footer>
  )
}