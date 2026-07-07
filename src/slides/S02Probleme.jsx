export default function S02Probleme() {
  const cols = [
    {
      left: 7.142857142857142,
      bg: 'var(--yellow)',
      icon: <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>,
      title: 'Des dizaines de canaux',
      subtitle: 'Mairies, réseaux, billetteries...',
    },
    {
      left: 36.46616541353383,
      bg: 'var(--lavender)',
      icon: <path d="M10 12h4"></path>,
      icon2: <path d="M10 8h4"></path>,
      icon3: <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>,
      icon4: <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>,
      icon5: <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>,
      title: 'Petites villes oubliées',
      subtitle: 'Rien en dehors des métropoles',
    },
    {
      left: 65.78947368421053,
      bg: 'var(--orange)',
      icon: <path d="M16 7h6v6"></path>,
      icon2: <path d="m22 7-8.5 8.5-5-5L2 17"></path>,
      title: 'Algorithmes étrangers',
      subtitle: 'Déconnectés du local français',
    },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "85.71428571428571%", height: "5.333333333333333%", fontSize: "16px" }}>Le problème</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "85.71428571428571%", height: "13.333333333333334%", fontSize: "36px" }}>L'info locale est <span className="accent">éparpillée partout.</span></div>

      {cols.map((c, i) => (
        <div key={i} className="block" style={{ left: `${c.left}%`, top: "36%", width: "27.06766917293233%", height: "44%", background: c.bg }}>
          <div className="badge" style={{ position: 'absolute', left: "24px", top: "28px", width: "50px", height: "50px", background: "var(--text)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {c.icon}{c.icon2}{c.icon3}{c.icon4}{c.icon5}
            </svg>
          </div>
          <div className="block-label" style={{ position: 'absolute', left: "24px", top: "160px", right: "24px", fontSize: "27px" }}>{c.title}</div>
          <div className="block-label" style={{ position: 'absolute', left: "24px", top: "204px", right: "24px", fontSize: "16px", fontWeight: 400, opacity: 0.75 }}>{c.subtitle}</div>
        </div>
      ))}
    </>
  )
}
