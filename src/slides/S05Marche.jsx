export default function S05Marche() {
  const support = [
    { left: 7.142857142857142, bg: 'var(--yellow)', tag: 'LIEUX', num: '113', desc: 'salles de spectacles, salons et lieux de conférence à Avignon.', source: 'INSEE Sirene, 2026.' },
    { left: 51.12781954887218, bg: 'var(--orange)', tag: 'CIBLE', num: '613', desc: 'associations culturelles actives à Avignon, nos futurs organisateurs.', source: 'INSEE Sirene / RNA, 2026.' },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>Le marché</div>

      <div className="el zain-xb" style={{ left: "7.142857142857142%", top: "13%", width: "85.71428571428571%", height: "22%", fontSize: "108px", color: "var(--text)", display: "flex", alignItems: "flex-end", lineHeight: 1 }}>
        986<span style={{ fontSize: "36px", fontWeight: 700, marginLeft: "10px", marginBottom: "14px" }}>événements / an</span>
      </div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "36%", width: "80%", height: "10%", fontSize: "26px", color: "var(--text)" }}>
        culturels et associatifs, rien qu'à <span className="accent" style={{ fontWeight: 700 }}>Avignon</span>.
      </div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "47%", width: "80%", height: "4%", fontSize: "14px", fontStyle: "italic", color: "var(--muted)" }}>Source : OpenAgenda (Bibliothèques, Musées, Ville d'Avignon), 12 derniers mois.</div>

      {support.map((c, i) => (
        <div key={i} className="block" style={{ left: `${c.left}%`, top: "58%", width: "41.729323308270675%", height: "30%", background: c.bg }}>
          <div className="pill" style={{ position: 'absolute', left: "24px", top: "24px", background: "var(--text)", color: "#fff", fontSize: "14px", padding: "6px 14px" }}>{c.tag}</div>
          <div className="block-num" style={{ position: 'absolute', left: "24px", top: "76px", right: "16px", fontSize: "34px" }}>{c.num}</div>
          <div className="block-label" style={{ position: 'absolute', left: "24px", top: "130px", right: "24px", fontSize: "16px", fontWeight: 400, opacity: 0.8, lineHeight: 1.35 }}>{c.desc}</div>
          <div className="block-source" style={{ position: 'absolute', left: "24px", bottom: "16px", right: "24px", fontSize: "12px", fontStyle: "italic" }}>{c.source}</div>
        </div>
      ))}
    </>
  )
}
