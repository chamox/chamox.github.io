'use client'

import { useEffect } from 'react'

// Eased smooth-scroll for in-page anchor clicks (the banner nav). scrollTo uses
// behavior:'instant' so CSS scroll-behavior can't re-smooth and cause a stutter.
export default function SmoothAnchors() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const OFFSET = 32
    const DURATION = 300
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

    function onClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      const hash = link?.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.getElementById(hash.slice(1))
      if (!target) return

      e.preventDefault()
      const startY = window.scrollY
      const endY = target.getBoundingClientRect().top + startY - OFFSET
      history.pushState(null, '', hash)

      if (reduce) {
        window.scrollTo({ top: endY, behavior: 'instant' })
        return
      }
      const start = performance.now()
      function step(now: number) {
        const p = Math.min((now - start) / DURATION, 1)
        window.scrollTo({ top: startY + (endY - startY) * ease(p), behavior: 'instant' })
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
