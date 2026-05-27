export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-gradient" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow">Educación Cívica · Puerto Rico</div>

        <h1 className="hero__title">
          <span className="line-red">TE VOTAS,</span>
          SI VOTAS.
        </h1>

        <p className="hero__subtitle">
          Tu voto no es solo un papel — es tu nombre en las decisiones que
          afectan tu familia, tu comunidad y el futuro de Puerto Rico.
          Descubre el poder real que tienes.
        </p>

        <div className="hero__actions">
          <a href="#impacto" className="btn btn--red">Ver el Impacto</a>
          <a href="#registrate" className="btn btn--outline-white">¡Regístrate a Votar!</a>
        </div>
      </div>

      <div className="hero__flag-bar" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Descubre más</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  )
}
