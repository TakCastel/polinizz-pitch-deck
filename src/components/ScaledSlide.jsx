import { useEffect, useRef, useState } from 'react'

const DESIGN_W = 1280
const DESIGN_H = DESIGN_W * 7.5 / 13.3

/** Rend une slide au format 1280×722 mise à l'échelle de la largeur disponible. */
export default function ScaledSlide({ children }) {
  const ref = useRef(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = ref.current
    const update = () => setScale(el.clientWidth / DESIGN_W)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className="scaled-slide">
      {scale > 0 && (
        <div
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}
