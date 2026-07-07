export default function S07BusinessModel() {
  const pills = [
    { label: 'Découverte', value: 'Gratuit', bg: 'var(--card)' },
    { label: 'Pro', value: '19,99 €/mois', bg: 'var(--yellow)' },
    { label: 'Pro+', value: '249,99 €/mois', bg: 'var(--lavender)' },
  ]

  const rows = [
    { mois: 'Mois 1', normal: '10', pro: '1', mrr: '449,89 €' },
    { mois: 'Mois 2', normal: '22', pro: '1', mrr: '689,77 €' },
    { mois: 'Mois 3', normal: '35', pro: '1', mrr: '949,64 €' },
    { mois: 'Mois 4', normal: '49', pro: '2', mrr: '1 479,49 €' },
    { mois: 'Mois 5', normal: '65', pro: '2', mrr: '1 799,33 €' },
    { mois: 'Mois 6', normal: '82', pro: '3', mrr: '2 389,15 €' },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>Business model</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "85.71428571428571%", height: "10.666666666666666%", fontSize: "31px" }}>Gratuit pour le public, <span className="accent">freemium pour les organisateurs.</span></div>

      {pills.map((p, i) => (
        <div key={i} className="pill" style={{ position: 'absolute', left: `${7.142857142857142 + i * 20}%`, top: "28%", background: p.bg, padding: "10px 20px", fontSize: "16px", gap: "8px" }}>
          {p.label}&nbsp;·&nbsp;<b>{p.value}</b>
        </div>
      ))}

      <div className="el" style={{ left: "7.142857142857142%", top: "38%", width: "85.71428571428571%", height: "45.33333333333333%" }}>
        <table style={{ width: "100%", height: "100%", borderCollapse: "collapse", fontFamily: "'Nunito'" }}>
          <thead>
            <tr>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "15px", padding: "10px 16px", textAlign: "left" }}>Progression</th>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "15px", padding: "10px 16px", textAlign: "center" }}>Clients Pro</th>
              <th style={{ background: "var(--text)", color: "#fff", fontSize: "15px", padding: "10px 16px", textAlign: "center" }}>Clients Pro+</th>
              <th style={{ background: "var(--orange)", color: "var(--text)", fontSize: "15px", padding: "10px 16px", textAlign: "center" }}>Revenu mensuel</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td style={{ fontSize: "18px", fontWeight: 700, padding: "10px 16px", textAlign: "left", background: "#fff", borderBottom: "1px solid #EDE1CB" }}>{r.mois}</td>
                <td style={{ fontSize: "18px", padding: "10px 16px", textAlign: "center", background: "#fff", borderBottom: "1px solid #EDE1CB" }}>{r.normal}</td>
                <td style={{ fontSize: "18px", padding: "10px 16px", textAlign: "center", background: "#fff", borderBottom: "1px solid #EDE1CB" }}>{r.pro}</td>
                <td style={{ fontSize: "18px", fontWeight: 700, padding: "10px 16px", textAlign: "center", background: "var(--tint-yellow)", borderBottom: "1px solid #EDE1CB" }}>{r.mrr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
