import { useState } from 'react'
import Deck from './components/Deck.jsx'
import Slide from './components/Slide.jsx'
import ScaledSlide from './components/ScaledSlide.jsx'
import slides from './slides/index.js'
import notes from './notes.js'

export default function App() {
  const [presenting, setPresenting] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [progress, setProgress] = useState(null)

  if (presenting) {
    return <Deck slides={slides} onExit={() => setPresenting(false)} />
  }

  const startPresenting = () => {
    setPresenting(true)
    document.documentElement.requestFullscreen?.().catch(() => {})
  }

  const download = async () => {
    if (progress) return
    setProgress('…')
    try {
      const { downloadPptx } = await import('./export.js')
      await downloadPptx(slides, notes, (i, n) => setProgress(`${i} / ${n}`))
    } finally {
      setProgress(null)
    }
  }

  return (
    <div className="preview">
      <div className="toolbar">
        <button type="button" className="btn" onClick={startPresenting}>
          ▶ Présenter
        </button>
        <button type="button" className="btn" onClick={download} disabled={!!progress}>
          {progress ? `Export… ${progress}` : '⬇ Télécharger (.pptx)'}
        </button>
        <button
          type="button"
          className={`btn btn-toggle${showNotes ? ' on' : ''}`}
          onClick={() => setShowNotes((v) => !v)}
          aria-pressed={showNotes}
        >
          💬 Notes de pitch
        </button>
      </div>

      <div className={`deck-scroll${showNotes ? ' with-notes' : ''}`}>
        {slides.map(({ Component, page }, i) => (
          <div className="row" key={page ?? 'titre'} id={`slide-${i + 1}`}>
            <ScaledSlide>
              <Slide page={page}>
                <Component />
              </Slide>
            </ScaledSlide>
            {showNotes && (
              <aside className="note-bubble">
                <div className="note-head">Slide {i + 1}</div>
                <p>{notes[i]}</p>
              </aside>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
