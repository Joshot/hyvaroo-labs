import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(hover:none)').matches
    if (isMobile) return

    document.body.style.cursor = 'none'

    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      if (ring.current) {
        ring.current.style.transform = `translate(${pos.current.x - 20}px, ${pos.current.y - 20}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    const enter = () => ring.current && (ring.current.style.transform += ' scale(1.8)')
    const leave = () => ring.current && ring.current.style.removeProperty('transform')

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf.current)
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position:'fixed',top:0,left:0,width:8,height:8,borderRadius:'50%',
        background:'#d4aa6a',pointerEvents:'none',zIndex:9999,transition:'none',
        boxShadow:'0 0 12px #b8965a',
      }}/>
      <div ref={ring} style={{
        position:'fixed',top:0,left:0,width:40,height:40,borderRadius:'50%',
        border:'1px solid rgba(184,150,90,0.6)',pointerEvents:'none',zIndex:9998,
        transition:'transform 0ms',
      }}/>
    </>
  )
}
