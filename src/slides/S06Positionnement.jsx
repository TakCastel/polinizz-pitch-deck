export default function S06Positionnement() {
  const rows = [
    { label: 'Petites villes couvertes', vals: ['y', '~', 'n', 'n'] },
    { label: 'Carte temps réel multi-sources', vals: ['y', 'n', 'n', 'n'] },
    { label: 'Gratuit pour le public', vals: ['y', 'y', 'y', 'y'] },
    { label: 'Indépendant des algorithmes', vals: ['y', 'n', 'y', 'y'] },
    { label: 'Statistiques d’audience organisateur', vals: ['y', '~', 'y', 'n'] },
    { label: 'Recherche IA illimitée', vals: ['y', 'n', 'n', 'n'] },
    { label: 'Cross-publication multi-agendas', vals: ['y', 'n', 'n', 'n'] },
    { label: 'Billetterie intégrée', vals: ['soon', 'n', 'y', 'n'], muted: true },
  ]
  const cellStyle = (v) => {
    if (v === 'y') return { color: 'var(--orange)', content: '✓' }
    if (v === '~') return { color: '#B8730F', content: '~' }
    if (v === 'soon') return { color: 'var(--neutral-x)', content: '2027' }
    return { color: 'var(--neutral-x)', content: '✗' }
  }

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "6%", width: "85.71428571428571%", height: "4%", fontSize: "16px" }}>Positionnement</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "11.333333333333334%", width: "85.71428571428571%", height: "10.666666666666666%", fontSize: "31px" }}>Seul acteur <span className="accent">carte + temps réel + petites villes.</span></div>

      <div className="el" style={{ left: "7.142857142857142%", top: "25.333333333333336%", width: "85.71428571428571%", height: "59.33333333333333%" }}>
        <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", fontFamily: "'Nunito'" }}>
          <thead>
            <tr>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "14px", padding: "7px 8px", textAlign: "left" }}></th>
              <th style={{ background: "var(--orange)", color: "var(--text)", fontSize: "14px", padding: "7px 8px", textAlign: "center" }}>Polinizz</th>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "14px", padding: "7px 8px", textAlign: "center" }}>Facebook / Instagram</th>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "14px", padding: "7px 8px", textAlign: "center" }}>Eventbrite</th>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "14px", padding: "7px 8px", textAlign: "center" }}>Sortiraparis / Le Bonbon</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={r.muted ? { opacity: 0.6 } : undefined}>
                <td style={{ fontSize: "14.5px", fontStyle: r.muted ? "italic" : "normal", padding: "7px 8px", textAlign: "left", background: "#fff", borderBottom: "1px solid #EDE1CB" }}>{r.label}</td>
                {r.vals.map((v, j) => {
                  const s = cellStyle(v)
                  return (
                    <td key={j} style={{ fontSize: v === 'soon' ? "13px" : "17px", fontWeight: "700", color: s.color, textAlign: "center", padding: "7px 8px", background: j === 0 && !r.muted ? "var(--tint-yellow)" : "#fff", borderBottom: "1px solid #EDE1CB" }}>{s.content}</td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "86.66666666666667%", width: "22.55639097744361%", height: "3.3333333333333335%", fontSize: "13px", fontStyle: "italic", color: "var(--muted)" }}>~ = partiel</div>
    </>
  )
}
