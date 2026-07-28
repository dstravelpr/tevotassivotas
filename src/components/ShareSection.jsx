import { useState } from 'react'

const SITE_URL = 'https://www.tevotassivotas.com'
const SHARE_TEXT = '¿Te Votas si Votas? Aprende el impacto de tu voto en Puerto Rico 🇵🇷'

export default function ShareSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(SITE_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SITE_URL)}`
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SITE_URL)}`
  const waUrl = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + ' ' + SITE_URL)}`

  return (
    <section className="section section--gray" id="comparte">
      <div className="container">
        <div className="section-intro" data-reveal>
          <span className="section__eyebrow">Haz Que Cuente</span>
          <h2 className="section__title">Comparte con Tu Gente</h2>
          <p className="section__subtitle">
            El conocimiento es poder. Comparte esta página con tu familia y amigos.
            Una conversación puede cambiar todo.
          </p>
        </div>

        <div className="share-grid" data-reveal>
          <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--fb">
            📘 Compartir en Facebook
          </a>
          <a href={xUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--x">
            𝕏 Compartir en X
          </a>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-btn--wa">
            💬 Enviar por WhatsApp
          </a>
          <button onClick={handleCopy} className="share-btn share-btn--copy">
            {copied ? '✓ ¡Copiado!' : '🔗 Copiar enlace'}
          </button>
        </div>
      </div>
    </section>
  )
}
