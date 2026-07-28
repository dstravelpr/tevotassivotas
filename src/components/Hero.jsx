export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__bg-gradient" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__eyebrow" data-reveal style={{ '--reveal-i': 0 }}>Educación Cívica · Puerto Rico</div>

        <h1 className="hero__title" data-reveal style={{ '--reveal-i': 1 }}>
          <span className="line-red">TE VOTAS,</span>
          SI VOTAS.
        </h1>

        <p className="hero__subtitle" data-reveal style={{ '--reveal-i': 2 }}>
          Tu voto no es solo un papel — es tu nombre en las decisiones que
          afectan tu familia, tu comunidad y el futuro de Puerto Rico.
          Descubre el poder real que tienes.
        </p>

        <div className="hero__actions" data-reveal style={{ '--reveal-i': 3 }}>
          <a href="#impacto" className="btn btn--red">Ver el Impacto</a>
          <a href="#registrate" className="btn btn--outline-white">¡Regístrate a Votar!</a>
        </div>
      </div>

      <div className="hero__flag-bar" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>
    </section>
  )
}
