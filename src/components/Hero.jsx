import { ArrowUpRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <>
      <style>{`
        .hero{
          min-height:100dvh;
          background:#fefcf8;
          position:relative;
          overflow:hidden;
          display:flex;flex-direction:column;justify-content:center;
        }
        /* Big bold blobs */
        .blob1{
          position:absolute;
          width:clamp(320px,45vw,640px);
          height:clamp(320px,45vw,640px);
          border-radius:60% 40% 30% 70%/60% 30% 70% 40%;
          background:linear-gradient(135deg,rgba(255,107,53,0.18),rgba(245,158,11,0.14));
          top:-10%;right:-8%;
          animation:blob 12s ease-in-out infinite;
          pointer-events:none;
        }
        .blob2{
          position:absolute;
          width:clamp(240px,35vw,480px);
          height:clamp(240px,35vw,480px);
          border-radius:40% 60% 70% 30%/40% 50% 60% 50%;
          background:linear-gradient(135deg,rgba(67,56,202,0.1),rgba(14,165,233,0.1));
          bottom:-8%;left:-5%;
          animation:blob 16s ease-in-out infinite reverse;
          pointer-events:none;
        }
        .blob3{
          position:absolute;
          width:clamp(160px,22vw,320px);
          height:clamp(160px,22vw,320px);
          border-radius:50%;
          background:radial-gradient(circle,rgba(16,185,129,0.12),transparent 70%);
          top:40%;left:45%;
          pointer-events:none;
        }
        /* Dot grid overlay */
        .hero-dots{
          position:absolute;inset:0;
          background-image:radial-gradient(circle,rgba(0,0,0,0.07) 1px,transparent 1px);
          background-size:28px 28px;
          pointer-events:none;
          mask-image:radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%);
        }
        .hero-inner{
          position:relative;z-index:1;
          width:min(calc(100% - 3rem),1200px);
          margin-inline:auto;
          padding-top:clamp(7rem,14vw,11rem);
          padding-bottom:clamp(5rem,10vw,8rem);
          display:grid;
          gap:3rem;
        }
        @media(min-width:960px){
          .hero-inner{grid-template-columns:1.05fr 0.95fr;align-items:center}
        }
        .hero-left{display:flex;flex-direction:column;gap:1.5rem}
        .hero-tag{
          display:inline-flex;align-items:center;gap:0.6rem;
          padding:0.35rem 0.9rem 0.35rem 0.5rem;
          border-radius:9999px;
          background:rgba(255,107,53,0.09);
          border:1px solid rgba(255,107,53,0.2);
          width:fit-content;
        }
        .hero-tag-dot{
          width:7px;height:7px;border-radius:50%;
          background:linear-gradient(135deg,#ff6b35,#f59e0b);
          flex-shrink:0;
        }
        .hero-tag-text{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.7rem;font-weight:600;letter-spacing:0.14em;
          text-transform:uppercase;color:#ff6b35;
        }
        .hero-h1{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(3.2rem,1.5rem + 5.5vw,7.5rem);
          font-weight:300;line-height:0.92;
          letter-spacing:-0.035em;color:#111;
        }
        .hero-h1 em{font-style:italic}
        .hero-h1 .c-coral{color:#ff6b35}
        .hero-h1 .c-indigo{color:#4338ca}
        .hero-desc{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(0.95rem,0.88rem + 0.35vw,1.15rem);
          color:rgba(17,17,17,0.55);
          max-width:46ch;font-weight:300;line-height:1.85;
        }
        .hero-btns{display:flex;flex-wrap:wrap;gap:0.75rem}
        .btn-fill{
          display:inline-flex;align-items:center;gap:0.5rem;
          min-height:52px;padding:0 2rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.8rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:#111;color:#fff;text-decoration:none;
          transition:all 250ms cubic-bezier(0.16,1,0.3,1);
          border:2px solid #111;
        }
        .btn-fill:hover{background:#ff6b35;border-color:#ff6b35;transform:translateY(-2px);box-shadow:0 10px 36px rgba(255,107,53,0.3)}
        .btn-stroke{
          display:inline-flex;align-items:center;gap:0.5rem;
          min-height:52px;padding:0 2rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.8rem;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;
          background:transparent;color:#111;text-decoration:none;
          border:2px solid rgba(17,17,17,0.15);
          transition:all 250ms;
        }
        .btn-stroke:hover{border-color:#4338ca;color:#4338ca;transform:translateY(-2px)}
        .hero-badges{
          display:flex;flex-wrap:wrap;gap:0.6rem;margin-top:0.5rem;
        }
        .h-badge{
          padding:0.4rem 0.9rem;border-radius:9999px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.7rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;
        }
        /* Hero right — visual card stack */
        .hero-right{position:relative;display:flex;justify-content:center;align-items:center}
        .hero-card-main{
          width:100%;max-width:420px;
          background:#fff;
          border-radius:28px;
          border:1px solid rgba(0,0,0,0.07);
          box-shadow:0 24px 80px rgba(0,0,0,0.1),0 4px 16px rgba(0,0,0,0.05);
          padding:2.5rem;
          position:relative;z-index:2;
        }
        .card-inner-label{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;letter-spacing:0.14em;
          text-transform:uppercase;color:rgba(17,17,17,0.35);
          margin-bottom:1.5rem;
        }
        .card-service-row{
          display:flex;align-items:center;gap:0.85rem;
          padding:0.85rem 0;
          border-bottom:1px solid rgba(0,0,0,0.05);
        }
        .card-service-row:last-child{border-bottom:none}
        .card-svc-dot{
          width:10px;height:10px;border-radius:50%;flex-shrink:0;
        }
        .card-svc-name{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;font-weight:500;color:#111;flex:1;
        }
        .card-svc-tag{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.65rem;font-weight:600;letter-spacing:0.08em;
          text-transform:uppercase;
          padding:0.2rem 0.6rem;border-radius:9999px;
        }
        .float-badge{
          position:absolute;
          background:#fff;
          border-radius:16px;
          box-shadow:0 8px 32px rgba(0,0,0,0.1);
          padding:0.75rem 1rem;
          display:flex;align-items:center;gap:0.6rem;
          animation:float 3s ease-in-out infinite;
        }
        .fb-top{top:-1rem;right:-1.5rem;animation-delay:0s;z-index:3}
        .fb-bot{bottom:-1rem;left:-1.5rem;animation-delay:1.5s;z-index:3}
        .fb-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0}
        .fb-val{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.1rem;font-weight:600;color:#111;line-height:1}
        .fb-lbl{font-family:'DM Sans',system-ui,sans-serif;font-size:0.65rem;color:rgba(17,17,17,0.45);font-weight:500}
        .hero-scroll{
          position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:0.4rem;
          color:rgba(17,17,17,0.3);animation:float 2.5s ease-in-out infinite;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;letter-spacing:0.16em;text-transform:uppercase;
        }
      `}</style>

      <section id="top" className="hero">
        <div className="blob1" aria-hidden="true"/>
        <div className="blob2" aria-hidden="true"/>
        <div className="blob3" aria-hidden="true"/>
        <div className="hero-dots" aria-hidden="true"/>

        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-tag au">
              <span className="hero-tag-dot"/>
              <span className="hero-tag-text">Premium Software House &mdash; Jakarta</span>
            </div>

            <h1 className="hero-h1">
              <span className="au d1">We build</span><br/>
              <em className="au d2 c-coral">world-class</em><br/>
              <span className="au d3 c-indigo">digital products.</span>
            </h1>

            <p className="hero-desc au d3">
              Hyvaroo Labs crafts high-performance, beautifully designed web products
              for founders and enterprises that refuse to settle for ordinary.
            </p>

            <div className="hero-btns au d4">
              <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-fill">
                Start a Project <ArrowUpRight size={15}/>
              </a>
              <a href="#portfolio" className="btn-stroke">View Work</a>
            </div>

            <div className="hero-badges au d5">
              {[['#fff0eb','#ff6b35','Web Dev'],['#eef2ff','#4338ca','UI/UX'],['#ecfdf5','#10b981','Next.js'],['#fffbeb','#f59e0b','Laravel']].map(([bg,c,t])=>(
                <span key={t} className="h-badge" style={{background:bg,color:c}}>{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — Visual card */}
          <div className="hero-right au d4">
            <div className="float-badge fb-top">
              <div className="fb-icon" style={{background:'#fff0eb'}}>&#128640;</div>
              <div><div className="fb-val">50+</div><div className="fb-lbl">Projects Done</div></div>
            </div>
            <div className="float-badge fb-bot">
              <div className="fb-icon" style={{background:'#ecfdf5'}}>&#9989;</div>
              <div><div className="fb-val">100%</div><div className="fb-lbl">Satisfaction</div></div>
            </div>
            <div className="hero-card-main">
              <p className="card-inner-label">Our Expertise</p>
              {[
                {dot:'#ff6b35',name:'Web Development',tag:'Full-Stack',tagBg:'#fff0eb',tagC:'#ff6b35'},
                {dot:'#4338ca',name:'UI / UX Design',tag:'Design',tagBg:'#eef2ff',tagC:'#4338ca'},
                {dot:'#10b981',name:'Frontend Eng.',tag:'React',tagBg:'#ecfdf5',tagC:'#10b981'},
                {dot:'#f59e0b',name:'Performance',tag:'Scale',tagBg:'#fffbeb',tagC:'#f59e0b'},
                {dot:'#0ea5e9',name:'Digital Strategy',tag:'Growth',tagBg:'#f0f9ff',tagC:'#0ea5e9'},
              ].map(({dot,name,tag,tagBg,tagC})=>(
                <div key={name} className="card-service-row">
                  <span className="card-svc-dot" style={{background:dot}}/>
                  <span className="card-svc-name">{name}</span>
                  <span className="card-svc-tag" style={{background:tagBg,color:tagC}}>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          Scroll <ChevronDown size={13}/>
        </div>
      </section>
    </>
  )
}
