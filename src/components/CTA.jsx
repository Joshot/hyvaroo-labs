import { MessageCircle, Mail } from 'lucide-react'

export default function CTA(){
  return(
    <>
      <style>{`
        .cta-section{
          padding:clamp(6rem,12vw,10rem) 0;
          background:linear-gradient(135deg,#fff0eb 0%,#eef2ff 40%,#ecfdf5 80%,#fffbeb 100%);
          background-size:300% 300%;
          animation:gradShift 8s ease infinite;
          position:relative;overflow:hidden;
        }
        .cta-blob1{
          position:absolute;top:-20%;right:-10%;
          width:40%;height:70%;
          background:radial-gradient(ellipse,rgba(255,107,53,0.12),transparent 65%);
          pointer-events:none;
        }
        .cta-blob2{
          position:absolute;bottom:-20%;left:-10%;
          width:40%;height:70%;
          background:radial-gradient(ellipse,rgba(67,56,202,0.1),transparent 65%);
          pointer-events:none;
        }
        .cta-inner{
          position:relative;z-index:1;
          display:flex;flex-direction:column;
          align-items:center;text-align:center;
          gap:1.25rem;max-width:680px;margin-inline:auto;
        }
        .cta-h2{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.5rem,1.5rem + 4vw,6rem);
          font-weight:300;line-height:0.95;color:#111;
        }
        .cta-h2 em{font-style:italic;color:#ff6b35}
        .cta-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(0.95rem,0.88rem + 0.3vw,1.1rem);
          color:rgba(17,17,17,0.55);
          max-width:42ch;line-height:1.85;font-weight:300;
        }
        .cta-btns{display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-top:0.75rem}
        .cta-btn-wa{
          display:inline-flex;align-items:center;gap:0.5rem;
          min-height:56px;padding:0 2.25rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:#111;color:#fff;text-decoration:none;
          border:2px solid #111;
          transition:all 250ms cubic-bezier(0.16,1,0.3,1);
          box-shadow:0 4px 20px rgba(17,17,17,0.15);
        }
        .cta-btn-wa:hover{background:#ff6b35;border-color:#ff6b35;transform:translateY(-2px);box-shadow:0 10px 36px rgba(255,107,53,0.3)}
        .cta-btn-email{
          display:inline-flex;align-items:center;gap:0.5rem;
          min-height:56px;padding:0 2.25rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.82rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:#fff;color:#111;text-decoration:none;
          border:2px solid rgba(17,17,17,0.15);
          transition:all 250ms;
        }
        .cta-btn-email:hover{border-color:#4338ca;color:#4338ca;transform:translateY(-2px)}
        .cta-meta{display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;margin-top:3rem;padding-top:3rem;border-top:1px solid rgba(0,0,0,0.08);width:100%}
        .cta-mi{
          display:flex;flex-direction:column;gap:0.2rem;
          padding:1.1rem 1.5rem;
          border-radius:14px;
          background:rgba(255,255,255,0.7);
          backdrop-filter:blur(8px);
          border:1.5px solid rgba(0,0,0,0.07);
          text-align:center;min-width:125px;
        }
        .cmi-l{font-family:'DM Sans',system-ui,sans-serif;font-size:0.6rem;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:rgba(17,17,17,0.35)}
        .cmi-v{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-weight:500;color:#111}
      `}</style>
      <section id="contact" className="cta-section">
        <div className="cta-blob1" aria-hidden="true"/>
        <div className="cta-blob2" aria-hidden="true"/>
        <div className="wrap">
          <div className="cta-inner">
            <p style={{fontFamily:'DM Sans,system-ui,sans-serif',fontSize:'0.7rem',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:'#ff6b35'}}>Start a Project</p>
            <h2 className="cta-h2">Ready to build<br/><em>something exceptional?</em></h2>
            <p className="cta-sub">For founders and enterprises that need a premium software partner. Let us talk about what you are building.</p>
            <div className="cta-btns">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="cta-btn-wa">
                <MessageCircle size={16}/> Chat on WhatsApp
              </a>
              <a href="mailto:hello@hyvaroolabs.com" className="cta-btn-email">
                <Mail size={16}/> Send an Email
              </a>
            </div>
            <div className="cta-meta">
              {[{l:'Based in',v:'Jakarta, Indonesia'},{l:'Response',v:'Under 24 hours'},{l:'Engagement',v:'Project-based'},{l:'Language',v:'ID & EN'}].map(({l,v})=>(
                <div key={l} className="cta-mi">
                  <span className="cmi-l">{l}</span>
                  <span className="cmi-v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
