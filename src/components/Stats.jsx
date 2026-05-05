import { useEffect, useRef, useState } from 'react'

function Counter({target,suffix='',duration=1800}){
  const [n,setN]=useState(0)
  const ref=useRef(null)
  const done=useRef(false)
  useEffect(()=>{
    const el=ref.current;if(!el)return
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!done.current){
        done.current=true
        const t0=performance.now()
        const tick=now=>{
          const p=Math.min((now-t0)/duration,1)
          const ease=1-Math.pow(1-p,4)
          setN(Math.floor(ease*target))
          if(p<1)requestAnimationFrame(tick);else setN(target)
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    },{threshold:0.5})
    obs.observe(el)
    return()=>obs.disconnect()
  },[target,duration])
  return <span ref={ref}>{n}{suffix}</span>
}

const stats=[
  {val:50,suf:'+',label:'Projects Delivered',sub:'Across various industries',bg:'#fff0eb',c:'#ff6b35'},
  {val:100,suf:'%',label:'Client Satisfaction',sub:'On every engagement',bg:'#eef2ff',c:'#4338ca'},
  {val:3,suf:'+',label:'Years of Excellence',sub:'Building premium products',bg:'#ecfdf5',c:'#10b981'},
  {val:24,suf:'h',label:'Response Guarantee',sub:'We never leave you waiting',bg:'#fffbeb',c:'#f59e0b'},
]

export default function Stats(){
  return(
    <>
      <style>{`
        .stats-section{padding:clamp(4rem,8vw,7rem) 0;background:#f8f6f2}
        .stats-grid{display:grid;gap:1.25rem}
        @media(min-width:540px){.stats-grid{grid-template-columns:repeat(2,1fr)}}
        @media(min-width:1000px){.stats-grid{grid-template-columns:repeat(4,1fr)}}
        .stat-card{
          padding:2rem 1.75rem;
          border-radius:20px;
          background:#fff;
          border:1.5px solid;
          display:flex;flex-direction:column;gap:0.4rem;
          transition:transform 250ms,box-shadow 250ms;
        }
        .stat-card:hover{transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,0.07)}
        .stat-val{
          font-family:'Cormorant Garamond',Georgia,serif;
          font-size:clamp(2.8rem,1.5rem + 3vw,4.5rem);
          font-weight:600;line-height:1;
        }
        .stat-label{font-family:'DM Sans',system-ui,sans-serif;font-size:0.9rem;font-weight:600;color:#111}
        .stat-sub{font-family:'DM Sans',system-ui,sans-serif;font-size:0.72rem;color:rgba(17,17,17,0.4);line-height:1.5}
      `}</style>
      <section className="stats-section">
        <div className="wrap">
          <div className="stats-grid">
            {stats.map(({val,suf,label,sub,bg,c})=>(
              <div key={label} className="stat-card" style={{borderColor:bg.replace('eb','c4').replace('ff','cc').replace('f5','d0').replace('eb','c4')}}>
                <div className="stat-val" style={{color:c}}><Counter target={val} suffix={suf}/></div>
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
