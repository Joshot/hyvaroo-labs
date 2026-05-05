import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight
    let raf

    const resize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const count = Math.min(80, Math.floor(w * h / 14000))
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(184,150,90,${p.o})`
        ctx.fill()
      })
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(184,150,90,${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <style>{`
        .hero{
          position:relative;min-height:100dvh;
          display:flex;flex-direction:column;justify-content:center;
          background:radial-gradient(ellipse 80% 60% at 50% 0%,#1a1208 0%,#0c0a06 60%);
          overflow:hidden;
        }
        .hero-canvas{position:absolute;inset:0;pointer-events:none}
        .hero-glow-l{
          position:absolute;top:-20%;left:-10%;width:60%;height:80%;
          background:radial-gradient(ellipse,rgba(184,150,90,0.07) 0%,transparent 65%);
          pointer-events:none;
        }
        .hero-glow-r{
          position:absolute;bottom:-10%;right:-10%;width:50%;height:60%;
          background:radial-gradient(ellipse,rgba(184,150,90,0.05) 0%,transparent 65%);
          pointer-events:none;
        }
        .hero-label{
          position:absolute;right:2rem;top:50%;
          transform:translateY(-50%) rotate(90deg);
          transform-origin:center;
          font-size:0.62rem;letter-spacing:0.22em;text-transform:uppercase;
          color:rgba(184,150,90,0.4);
          font-family:'DM Sans',system-ui,sans-serif;
          display:none;
        }
        .hero-inner{
          position:relative;z-index:1;
          width:min(calc(100% - 3rem),1200px);
          margin-inline:auto;
          padding-top:clamp(6rem,12vw,10rem);
          padding-bottom:clamp(6rem,12vw,10rem);
        }
        .hero-badge{
          display:inline-flex;align-items:center;gap:0.6rem;
          padding:0.4rem 1rem 0.4rem 0.5rem;
          border-radius:9999px;
          border:1px solid rgba(184,150,90,0.25);
          background:rgba(184,150,90,0.07);
          margin-bottom:2.5rem;
        }
        .hero-badge-dot{
          width:6px;height:6px;border-radius:50%;
          background:#b8965a;
          animation:pulse-gold 2s ease-in-out infinite;
        }
        .hero-badge-text{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.7rem;font-weight:600;letter-spacing:0.14em;
          text-transform:uppercase;color:#b8965a;
        }
        .hero-h1{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(3.5rem,2rem + 6vw,8.5rem);
          font-weight:300;line-height:0.92;
          letter-spacing:-0.04em;color:#faf8f3;
          margin-bottom:1.75rem;
        }
        .hero-h1 em{font-style:italic}
        .hero-h1 .shimmer-text{
          background:linear-gradient(120deg,#b8965a 0%,#f0d080 40%,#b8965a 60%,#d4aa6a 100%);
          background-size:200% auto;
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
          animation:shimmer 3s linear infinite;
        }
        .hero-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:clamp(1rem,0.9rem + 0.5vw,1.25rem);
          color:rgba(232,224,208,0.6);
          max-width:50ch;font-weight:300;line-height:1.85;
          margin-bottom:2.5rem;
        }
        .hero-btns{display:flex;flex-wrap:wrap;gap:0.75rem;margin-bottom:4rem}
        .hero-proof{
          display:flex;flex-wrap:wrap;gap:2.5rem;
          padding-top:2.5rem;
          border-top:1px solid rgba(184,150,90,0.15);
        }
        .proof-item-val{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(1.8rem,1.2rem + 1.5vw,3rem);
          font-weight:600;line-height:1;
          background:linear-gradient(135deg,#faf8f3,#d4aa6a);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .proof-item-label{
          font-size:0.68rem;font-weight:600;letter-spacing:0.12em;
          text-transform:uppercase;color:rgba(184,150,90,0.7);
          margin-top:4px;
          font-family:'DM Sans',system-ui,sans-serif;
        }
        .hero-scroll{
          position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);
          display:flex;flex-direction:column;align-items:center;gap:0.4rem;
          color:rgba(184,150,90,0.4);animation:float 2.5s ease-in-out infinite;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.62rem;letter-spacing:0.16em;text-transform:uppercase;
        }
        @media(min-width:900px){.hero-label{display:block}}
      `}</style>

      <section id="top" className="hero">
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-glow-l" aria-hidden="true" />
        <div className="hero-glow-r" aria-hidden="true" />
        <span className="hero-label" aria-hidden="true">Hyvaroo Labs &mdash; 2026</span>

        <div className="hero-inner">
          <div className="hero-badge animate-fadeup">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text">Premium Software House &mdash; Jakarta</span>
          </div>

          <h1 className="hero-h1">
            <span className="animate-fadeup delay-1">We engineer</span><br/>
            <em className="animate-fadeup delay-2">digital products</em><br/>
            <span className="shimmer-text animate-fadeup delay-3">that define markets.</span>
          </h1>

          <p className="hero-sub animate-fadeup delay-3">
            Hyvaroo Labs builds high-performance, beautifully crafted web products for
            founders and enterprises that refuse to settle for mediocrity.
          </p>

          <div className="hero-btns animate-fadeup delay-4">
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Start a Project <ArrowUpRight size={16}/>
            </a>
            <a href="#portfolio" className="btn-ghost">View Our Work</a>
          </div>

          <div className="hero-proof animate-fadeup delay-4">
            {[['50+','Projects Delivered'],['100%','Client Satisfaction'],['3+','Years Experience'],['24h','Response Time']].map(([v,l])=>(
              <div key={l}>
                <div className="proof-item-val">{v}</div>
                <div className="proof-item-label">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-scroll" aria-hidden="true">
          Scroll
          <ChevronDown size={14}/>
        </div>
      </section>
    </>
  )
}
