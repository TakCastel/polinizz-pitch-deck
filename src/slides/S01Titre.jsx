import BeeLogo from '../components/BeeLogo.jsx'

export default function S01Titre() {
  return (
    <>
      <div className="el" style={{ left: "7.142857142857142%", top: "16%", width: "10.526315789473683%", height: "5.333333333333333%", fontSize: "15px" }}>
        <span className="pill" style={{ background: "var(--yellow)", padding: "8px 18px" }}>Pitch</span>
      </div>
      <div className="el logo-inline" style={{ left: "7.142857142857142%", top: "32%", width: "9.774436090225564%", height: "17.333333333333336%", color: "var(--text)" }}><BeeLogo />
      </div>
      <div className="el zain-xb" style={{ left: "18.42105263157895%", top: "30.666666666666664%", width: "70%", height: "20%", fontSize: "76px", display: "flex", alignItems: "center" }}>Polinizz</div>
      <div className="el nunito" style={{ left: "7.142857142857142%", top: "54.666666666666664%", width: "70.30075187969923%", height: "8%", fontSize: "26px", color: "var(--text)" }}>Tous les événements <span className="accent" style={{ fontWeight: 700 }}>butinés près de chez vous.</span></div>
    </>
  )
}
