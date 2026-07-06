import BeeLogo from './BeeLogo.jsx'

export default function Slide({ page, children }) {
  return (
    <div className="slide">
      {children}
      {page && (
        <>
          <div className="sidebar-word">Polinizz</div>
          <div className="logo"><BeeLogo /></div>
          <div className="page-num">{page}</div>
        </>
      )}
    </div>
  )
}
