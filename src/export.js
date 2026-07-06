import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { toPng } from 'html-to-image'
import PptxGenJS from 'pptxgenjs'
import Slide from './components/Slide.jsx'

const W = 1280
const H = W * 7.5 / 13.3

async function renderSlidePng({ Component, page }) {
  const host = document.createElement('div')
  host.className = 'export-host'
  host.style.cssText = `position:fixed;left:-99999px;top:0;width:${W}px;height:${H}px;`
  document.body.appendChild(host)
  const root = createRoot(host)
  try {
    root.render(createElement(Slide, { page }, createElement(Component)))
    await new Promise((r) => setTimeout(r, 60))
    await document.fonts.ready
    return await toPng(host.firstChild, { width: W, height: H, pixelRatio: 2 })
  } finally {
    root.unmount()
    host.remove()
  }
}

export async function downloadPptx(slides, notes, onProgress) {
  const pptx = new PptxGenJS()
  pptx.defineLayout({ name: 'POLINIZZ', width: 13.3, height: 7.5 })
  pptx.layout = 'POLINIZZ'
  pptx.title = 'Polinizz — Pitch Deck Demo Day'

  for (let i = 0; i < slides.length; i++) {
    onProgress?.(i + 1, slides.length)
    const data = await renderSlidePng(slides[i])
    const slide = pptx.addSlide()
    slide.addImage({ data, x: 0, y: 0, w: 13.3, h: 7.5 })
    if (notes[i]) slide.addNotes(notes[i])
  }

  await pptx.writeFile({ fileName: 'Polinizz-Pitch-Deck.pptx' })
}
