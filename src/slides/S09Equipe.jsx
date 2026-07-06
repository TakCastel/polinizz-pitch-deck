export default function S09Equipe() {
  const team = [
    { left: 7.142857142857142, bg: 'var(--lavender)', name: 'Tarik', role: 'Fondateur & Développement', desc: 'Le produit, la technique.' },
    { left: 51.87969924812031, bg: 'var(--yellow)', name: 'Katerine', role: 'Cofondatrice & Marketing', desc: 'Le contenu, la communauté.' },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>L'équipe</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "85.71428571428571%", height: "13.333333333333334%", fontSize: "36px" }}>Deux profils, <span className="accent">une conviction.</span></div>

      {team.map((t, i) => (
        <div key={i} className="block" style={{ left: `${t.left}%`, top: "36%", width: "40.977443609022555%", height: "44%", background: t.bg }}>
          <div className="badge" style={{ position: 'absolute', left: "28px", top: "28px", width: "64px", height: "64px", background: "var(--text)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          </div>
          <div className="block-num" style={{ position: 'absolute', left: "28px", top: "128px", right: "24px", fontSize: "28px" }}>{t.name}</div>
          <div className="block-label" style={{ position: 'absolute', left: "28px", top: "176px", right: "24px", fontSize: "17px" }}>{t.role}</div>
          <div className="block-label" style={{ position: 'absolute', left: "28px", top: "208px", right: "24px", fontSize: "16px", fontWeight: 400, opacity: 0.7 }}>{t.desc}</div>
        </div>
      ))}
    </>
  )
}
