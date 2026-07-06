export default function S04Traction() {
  const stats = [
    { left: 7.142857142857142, bg: 'var(--yellow)', num: '600+', label: 'villes couvertes' },
    { left: 36.46616541353383, bg: 'var(--lavender)', num: '25 000+', label: 'événements référencés' },
    { left: 65.78947368421053, bg: 'var(--orange)', num: '150', label: 'utilisateurs actifs' },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>Traction</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "85.71428571428571%", height: "13.333333333333334%", fontSize: "36px" }}>6 mois <span className="accent">après le lancement.</span></div>

      {stats.map((s, i) => (
        <div key={i} className="block" style={{ left: `${s.left}%`, top: "36%", width: "27.06766917293233%", height: "32%", background: s.bg }}>
          <div className="block-num" style={{ position: 'absolute', left: "24px", top: "28px", fontSize: "50px" }}>{s.num}</div>
          <div className="block-label" style={{ position: 'absolute', left: "24px", top: "150px", right: "24px", fontSize: "18px", fontWeight: 700 }}>{s.label}</div>
        </div>
      ))}

      <div className="block" style={{ left: "7.142857142857142%", top: "72%", width: "85.71428571428571%", height: "16%", background: "var(--yellow)" }}>
        <div className="badge" style={{ position: 'absolute', left: "24px", top: "34px", width: "44px", height: "44px", background: "var(--text)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
        </div>
        <div className="block-label" style={{ position: 'absolute', left: "88px", top: "44px", right: "24px", fontSize: "20px", display: "flex", alignItems: "center", height: "44px" }}><b>Croissance organique</b>,&nbsp;sans budget marketing.</div>
      </div>
    </>
  )
}
