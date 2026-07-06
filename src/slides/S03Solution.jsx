import phoneMockup from '../assets/phone-mockup.png'

export default function S03Solution() {
  const features = [
    {
      top: 48,
      bg: 'var(--yellow)',
      icon: <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>,
      text: 'Recherche par ville, filtrée par date et catégorie',
    },
    {
      top: 58,
      bg: 'var(--lavender)',
      icon: <>
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </>,
      text: "Fiche événement avec lien vers l'organisateur",
    },
    {
      top: 68,
      bg: 'var(--orange)',
      icon: <>
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
        <path d="M11 12 5.12 2.2"></path>
        <path d="m13 12 5.88-9.8"></path>
        <path d="M8 7h8"></path>
        <circle cx="12" cy="17" r="5"></circle>
        <path d="M12 18v-2h-.5"></path>
      </>,
      text: 'Classement des « rucheurs » les plus actifs',
    },
    {
      top: 78,
      bg: 'var(--yellow)',
      icon: <>
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </>,
      text: 'Application mobile bientôt disponible',
    },
  ]

  return (
    <>
      <div className="el kicker" style={{ left: "7.142857142857142%", top: "8%", width: "50%", height: "5.333333333333333%", fontSize: "16px" }}>La solution</div>
      <div className="el subtitle" style={{ left: "7.142857142857142%", top: "14.666666666666666%", width: "48%", height: "16%", fontSize: "34px" }}>Une carte <span className="accent">unique, en temps réel.</span></div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "32.5%", width: "44%", height: "8%", fontSize: "19px", color: "var(--text)", opacity: 0.8, lineHeight: 1.4 }}>Tous les événements agrégés, à jour, au même endroit.</div>

      {features.map((f, i) => (
        <div key={i}>
          <div className="badge" style={{ left: "7.142857142857142%", top: `${f.top}%`, width: "3.3834586466165413%", height: "6%", background: f.bg }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{f.icon}</svg>
          </div>
          <div className="el nunito" style={{ left: "12.03007518796992%", top: `${f.top}%`, width: "38%", height: "6%", fontSize: "18px", color: "var(--text)", display: "flex", alignItems: "center" }}>{f.text}</div>
        </div>
      ))}

      <img src={phoneMockup} alt="Carte Polinizz sur mobile" className="el" style={{ left: "57.45714285714286%", top: "6%", width: "35.4%", height: "88%", objectFit: "contain" }} />
    </>
  )
}
