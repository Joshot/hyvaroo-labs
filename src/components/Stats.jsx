import { useEffect, useRef, useState } from 'react'

function Counter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 4)
          setCount(Math.floor(ease * target))
          if (progress < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { val: 50, suffix: '+', label: 'Projects Delivered', sub: 'Across various industries' },
  { val: 100, suffix: '%', label: 'Client Satisfaction', sub: 'Measured across all engagements' },
  { val: 3, suffix: '+', label: 'Years of Excellence', sub: 'Building premium digital products' },
  { val: 24, suffix: 'h', label: 'Response Guarantee', sub: 'We never leave you waiting' },
]

export default function Stats() {
  return (
    <>
      <style>{`
        .stats-section{
          padding:clamp(4rem,8vw,7rem) 0;
          background:linear-gradient(180deg,#0c0a06 0%,#100e08 100%);
          border-bottom:1px solid rgba(184,150,90,0.1);
        }
        .stats-grid{
          display:grid;gap:1px;
          background:rgba(184,150,90,0.1);
          border:1px solid rgba(184,150,90,0.1);
          border-radius:24px;overflow:hidden;
        }
        @media(min-width:640px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1000px){.stats-grid{grid-template-columns:repeat(4,1fr)}}
        .stat-cell{
          padding:clamp(2rem,4vw,3rem);
          background:#100e08;
          display:flex;flex-direction:column;gap:0.5rem;
          transition:background 300ms;
          position:relative;overflow:hidden;
        }
        .stat-cell::before{
          content:'';
          position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,#b8965a,transparent);
          opacity:0;transition:opacity 300ms;
        }
        .stat-cell:hover{background:#161208}
        .stat-cell:hover::before{opacity:1}
        .stat-val{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.5rem,1.5rem + 3vw,4.5rem);
          font-weight:600;line-height:1;
          background:linear-gradient(135deg,#faf8f3 0%,#d4aa6a 100%);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        }
        .stat-label{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.88rem;font-weight:600;
          color:rgba(232,224,208,0.85);
        }
        .stat-sub{
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:0.72rem;color:rgba(184,150,90,0.5);
          line-height:1.5;
        }
      `}</style>
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map(({ val, suffix, label, sub }) => (
              <div key={label} className="stat-cell">
                <div className="stat-val"><Counter target={val} suffix={suffix} /></div>
                <div className="stat-label">{label}</div>
                <div className="stat-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
