import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flag" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
        <Logo size={64} wordmark={false} />
      </div>

      <div className="footer__logo">
        <span className="accent">Te</span>Votas<span className="accent">Si</span>Votas
      </div>
      <p className="footer__tagline">Educación cívica para Puerto Rico</p>

      <div className="footer__links">
        <a href="#impacto">Impacto</a>
        <a href="#oficiales">Oficiales</a>
        <a href="#historia">Historia</a>
        <a href="#registrate">Regístrate</a>
        <a href="https://www.sivotastevotas.com" target="_blank" rel="noopener noreferrer">
          Si Votas, Te Votas →
        </a>
      </div>

      <p className="footer__copy">© {new Date().getFullYear()} TeVotasSiVotas.com — Todos los derechos reservados</p>
      <p className="footer__disclaimer">
        Este es un proyecto educativo apartidista. No está afiliado a ningún partido político
        ni candidato. Su único propósito es promover la participación electoral en Puerto Rico.
      </p>
    </footer>
  )
}
