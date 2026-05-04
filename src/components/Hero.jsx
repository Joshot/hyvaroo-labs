import { useEffect, useRef } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let raf
    let t = 0

    const PARTICLES = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.004

      // Nebula layers
      const g1 = ctx.createRadialGradient(W * 0.7, H * 0.25, 0, W * 0.7, H * 0.25, W * 0.55)
      g1.addColorStop(0, `rgba(201,169,110,${0.055 + Math.sin(t) * 0.015})`)
      g1.addColorStop(0.5, `rgba(120,80,30,${0.03 + Math.sin(t * 0.7) * 0.01})`)
      g1.addColorStop(1, 'transparent')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, W, H)

      const g2 = ctx.createRadialGradient(W * 0.15, H * 0.7, 0, W * 0.15, H * 0.7, W * 0.4)
      g2.addColorStop(0, `rgba(60,40,120,${0.04 + Math.sin(t * 1.3) * 0.01})`)
      g2.addColorStop(1, 'transparent')
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, W, H)

      // Particles
      PARTICLES.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,169,110,${p.alpha})`
        ctx.fill()
      })

      // Subtle horizontal scan line
      const scanY = ((t * 60) % H)
      const gs = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60)
      gs.addColorStop(0, 'transparent')
      gs.addColorStop(0.5, 'rgba(201,169,110,0.025)')
      gs.addColorStop(1, 'transparent')
      ctx.fillStyle = gs
      ctx.fillRect(0, scanY - 60, W, 120)

      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <style>{`
        .hero {
          position: relative;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: #08070a;
        }
        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 2;
          width: min(calc(100% - 2.5rem), 1100px);
          margin-inline: auto;
          padding-top: 9rem;
          padding-bottom: 5rem;
        }
        .hero-tag-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 1rem;
          border: 1px solid rgba(201,169,110,0.25);
          border-radius: 2px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c9a96e;
          background: rgba(201,169,110,0.06);
        }
        .hero-tag-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #c9a96e;
          animation: pulse 2s ease-in-out infinite;
        }
        .hero-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3.4rem, 1rem + 7.5vw, 9.5rem);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.04em;
          color: #f0ede8;
          animation: fadeUp 1s 0.15s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-h1 em {
          font-style: italic;
          background: linear-gradient(135deg, #f0c96e 0%, #c9a96e 40%, #8a6030 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          margin-top: 2rem;
          font-size: clamp(1rem, 0.9rem + 0.4vw, 1.2rem);
          color: rgba(240,237,232,0.55);
          max-width: 46ch;
          font-weight: 300;
          line-height: 1.85;
          animation: fadeUp 1s 0.28s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-top: 2.5rem;
          animation: fadeUp 1s 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(240,237,232,0.08);
          animation: fadeUp 1s 0.55s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-stat-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 1.2rem + 1.5vw, 2.8rem);
          font-weight: 600;
          line-height: 1;
          color: #c9a96e;
        }
        .hero-stat-lbl {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.4);
          margin-top: 5px;
        }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 3;
          animation: fadeUp 1s 1s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-scroll span {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
        }
        .hero-scroll-icon {
          color: rgba(201,169,110,0.5);
          animation: bounce 2.5s ease-in-out infinite;
        }
        .hero-bg-text {
          position: absolute;
          right: -1%;
          bottom: -2%;
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(6rem, 16vw, 20rem);
          font-weight: 700;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,0.07);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.06em;
          z-index: 1;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(6px); }
        }
      `}</style>

      <section id="top" className="hero">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-tag-row">
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Available for projects
            </div>
            <div className="hero-tag">Jakarta, Indonesia</div>
          </div>

          <h1 className="hero-h1">
            We engineer<br />
            <em>remarkable</em><br />
            digital products.
          </h1>

          <p className="hero-sub">
            Hyvaroo Labs is a premium software house. We build world-class web products
            for founders and companies who demand craftsmanship over commodity.
          </p>

          <div className="hero-btns">
            <a href="https://wa.me/6285159611202" target="_blank" rel="noopener noreferrer" className="btn-glow">
              Start a Project <ArrowUpRight size={15} />
            </a>
            <a href="#portfolio" className="btn-ghost">See Our Work</a>
          </div>

          <div className="hero-stats">
            {[['∞','Scalability'],['100%','Satisfaction'],['1st','Delivery'],['HD','Quality']].map(([n, l]) => (
              <div key={l}>
                <div className="hero-stat-num">{n}</div>
                <div className="hero-stat-lbl">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-bg-text" aria-hidden="true">HL</div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <ChevronDown size={16} className="hero-scroll-icon" />
        </div>
      </section>
    </>
  )
}
