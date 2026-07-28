import { useEffect } from 'react'

/**
 * Scroll-reveal via IntersectionObserver. Dependency-free.
 * Observes every [data-reveal] and [data-line-reveal] element on mount and
 * adds `is-visible` once it enters the viewport (then stops observing it).
 * Honors prefers-reduced-motion by revealing everything immediately.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal], [data-line-reveal]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
