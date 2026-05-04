const items = ['Web Development','UI/UX Design','Frontend Engineering','Performance Optimization','Scalable Systems','Premium Products','Digital Growth','Modern Standards']

export default function Marquee() {
  return (
    <div style={{overflow:'hidden',borderTop:'1px solid var(--ivory-border)',borderBottom:'1px solid var(--ivory-border)',background:'var(--ivory-warm)',padding:'var(--sp-4) 0'}}>
      <div style={{display:'flex',gap:'var(--sp-10)',animation:'marquee 28s linear infinite',width:'max-content'}}>
        {[...items,...items,...items].map((t,i) => (
          <span key={i} style={{display:'inline-flex',alignItems:'center',gap:'var(--sp-5)',whiteSpace:'nowrap',fontFamily:'var(--f-display)',fontSize:'var(--tx-md)',fontWeight:400,fontStyle:'italic',color:'var(--text-2)'}}>
            {t}
            <span style={{display:'block',width:6,height:6,borderRadius:'50%',background:'var(--gold)',flexShrink:0}} aria-hidden="true"/>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-33.333%)}}`}</style>
    </div>
  )
}