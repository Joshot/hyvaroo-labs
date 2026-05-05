import { MessageCircle, Mail, ArrowUpRight } from 'lucide-react'

export default function CTA() {
  return (
    <>
      <style>{`
        .cta-section{
          padding:clamp(6rem,12vw,10rem) 0;
          background:radial-gradient(ellipse 80% 60% at 50% 100%,#1a1208 0%,#0c0a06 60%);
          border-top:1px solid rgba(184,150,90,0.1);
          position:relative;overflow:hidden;
        }
        .cta-glow{
          position:absolute;top:50%;left:50%;
          transform:translate(-50%,-50%);
          width:600px;height:400px;
          background:radial-gradient(ellipse,rgba(184,150,90,0.08) 0%,transparent 65%);
          pointer-events:none;
        }
        .cta-inner{
          position:relative;z-index:1;
          display:flex;flex-direction:column;
          align-items:center;text-align:center;
          gap:1rem;max-width:700px;margin-inline:auto;
        }
        .cta-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.5rem,1.5rem + 4vw,6rem);
          font-weight:300;line-height:0.95;
          color:#faf8f3;
        }
        .cta-h2 em{font-style:italic}
        .cta-h2 .shimmer-text{
          background:linear-gradient(120deg,#b8965a 0%,#f0d080 40%,#b8965a 60%,#d4aa6a 100%);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 3s linear infinite;
        }
        .cta-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(0.95rem,0.88rem + 0.35vw,1.15rem);
          color:rgba(232,224,208,0.5);
          max-width:42ch;line-height:1.85;
          font-weight:300;margin-top:0.5rem;
        }
        .cta-btns{display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-top:1rem}
        .cta-meta{
          display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;
          margin-top:3rem;padding-top:3rem;
          border-top:1px solid rgba(184,150,90,0.1);
          width:100%;
        }
        .cta-meta-item{
          display:flex;flex-direction:column;gap:0.25rem;
          padding:1.25rem 1.75rem;
          border:1px solid rgba(184,150,90,0.12);
          border-radius:14px;
          background:rgba(184,150,90,0.04);
          text-align:center;min-width:130px;
        }
        .meta-label{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;font-weight:600;
          letter-spacing:0.12em;text-transform:uppercase;
          color:rgba(184,150,90,0.5);
        }
        .meta-val{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1rem,0.9rem + 0.4vw,1.2rem);
          font-weight:500;color:rgba(232,224,208,0.8);
        }
      `}</style>

      <section id="contact" className="cta-section">
        <div className="cta-glow" aria-hidden="true"/>
        <div className="wrap">
          <div className="cta-inner">
            <span className="eyebrow">Start a Project</span>
            <h2 className="cta-h2">
              Ready to build<br/>
              <span className="shimmer-text"><em>something exceptional?</em></span>
            </h2>
            <span className="gold-line" style={{margin:'0.25rem auto'}}/>
            <p className="cta-sub">
              For founders and enterprises that need a premium software partner.
              Let us talk about what you are building.
            </p>
            <div className="cta-btns">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-gold">
                <MessageCircle size={16}/> Chat on WhatsApp
              </a>
              <a href="mailto:hello@hyvaroolabs.com" className="btn-ghost">
                <Mail size={16}/> Send an Email
              </a>
            </div>
            <div className="cta-meta">
              {[
                {l:'Based in',v:'Jakarta, Indonesia'},
                {l:'Response',v:'Under 24 hours'},
                {l:'Engagement',v:'Project-based'},
                {l:'Language',v:'ID \u0026 EN'},
              ].map(({l,v})=>(
                <div key={l} className="cta-meta-item">
                  <span className="meta-label">{l}</span>
                  <span className="meta-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
