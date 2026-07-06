import { useCallback, useEffect, useState } from 'react'
import Slide from './Slide.jsx'

const DESIGN_W = 1280
const DESIGN_H = DESIGN_W * 7.5 / 13.3

function slideFromHash(count) {
  const n = parseInt(window.location.hash.slice(1), 10)
  return Number.isInteger(n) && n >= 1 && n <= count ? n - 1 : 0
}

export default function Deck({ slides, onExit }) {
  const count = slides.length
  const [index, setIndex] = useState(() => slideFromHash(count))
  const [scale, setScale] = useState(1)

  const go = useCallback((next) => {
    setIndex(() => {
      const clamped = Math.max(0, Math.min(count - 1, next))
      window.history.replaceState(null, '', `#${clamped + 1}`)
      return clamped
    })
  }, [count])

  useEffect(() => {
    const fit = () => setScale(Math.min(
      window.innerWidth / DESIGN_W,
      window.innerHeight / DESIGN_H,
    ))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault()
        go(index + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        go(index - 1)
      } else if (e.key === 'Home') {
        go(0)
      } else if (e.key === 'End') {
        go(count - 1)
      } else if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen()
      } else if (e.key === 'Escape') {
        onExit?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, count, go, onExit])

  useEffect(() => {
    const onHash = () => setIndex(slideFromHash(count))
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [count])

  const { Component, page } = slides[index]

  return (
    <div className="theater">
      <div
        key={index}
        className="stage"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        <Slide page={page}><Component /></Slide>
      </div>
      <button type="button" className="nav-zone nav-prev" aria-label="Slide précédente" onClick={() => go(index - 1)} />
      <button type="button" className="nav-zone nav-next" aria-label="Slide suivante" onClick={() => go(index + 1)} />
      <div className="hud">{index + 1} / {count}</div>
    </div>
  )
}
