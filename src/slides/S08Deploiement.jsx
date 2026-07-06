export default function S08Deploiement() {
  const steps = [
    { left: 7.142857142857142, bg: 'var(--yellow)', num: 1, title: 'Curation locale', desc: 'On vérifie chaque événement.' },
    { left: 28.947368421052634, bg: 'var(--lavender)', num: 2, title: 'Présence Instagram', desc: "L'agenda de la semaine." },
    { left: 50.75187969924812, bg: 'var(--orange)', num: 3, title: 'Vidéos courtes', desc: 'Quoi faire ce week-end.' },
    { left: 72.55639097744361, bg: 'var(--yellow)', num: 4, title: 'Communauté locale', desc: 'Un noyau de « rucheurs ».' },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>Déploiement &amp; prochaines étapes</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "85.71428571428571%", height: "12%", fontSize: "31px" }}>La méthode Avignon : <span className="accent">prouver, puis répliquer.</span></div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "29.333333333333336%", width: "85.71428571428571%", height: "6.666666666666667%", fontSize: "20px", color: "var(--text)", opacity: 0.8 }}>Devenir le référent des sorties à Avignon, avant d'élargir.</div>

      {steps.map((s, i) => (
        <div key={i} className="block" style={{ left: `${s.left}%`, top: "40%", width: "19.548872180451127%", height: "30%", background: s.bg }}>
          <div style={{ position: 'absolute', left: "20px", top: "20px", width: "40px", height: "40px", borderRadius: "50%", background: "var(--text)", color: "#fff", fontFamily: "Zain", fontWeight: 700, fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>{s.num}</div>
          <div className="block-label" style={{ position: 'absolute', left: "20px", top: "128px", right: "16px", fontSize: "19px" }}>{s.title}</div>
          <div className="block-label" style={{ position: 'absolute', left: "20px", top: "168px", right: "16px", fontSize: "15px", fontWeight: 400, opacity: 0.75, lineHeight: 1.35 }}>{s.desc}</div>
        </div>
      ))}

      <div className="block" style={{ left: "7.142857142857142%", top: "76.66666666666667%", width: "85.71428571428571%", height: "12%", background: "var(--card)" }}>
        <div className="badge" style={{ position: 'absolute', left: "20px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", background: "var(--text)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
        </div>
        <div className="block-label" style={{ position: 'absolute', left: "78px", top: "0", bottom: "0", right: "24px", fontSize: "16px", fontWeight: 400, display: "flex", alignItems: "center" }}>Après Avignon : application mobile iOS &amp; Android · réplication ville par ville · partenariats institutionnels · Premium IA organisateurs.</div>
      </div>
    </>
  )
}
