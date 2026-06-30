import { useSyncExternalStore } from 'react'

// Dark mode is the `dark` class on <html>. One reader (MutationObserver) for every
// component that needs to react to it; the toggle just writes the class.
const subscribe = (cb: () => void) => {
  const obs = new MutationObserver(cb)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => obs.disconnect()
}
const isDark = () => document.documentElement.classList.contains('dark')

export function useDark() {
  return useSyncExternalStore(subscribe, isDark, () => false)
}

export function toggleTheme() {
  const next = !isDark()
  document.documentElement.classList.toggle('dark', next)
  try {
    localStorage.setItem('theme', next ? 'dark' : 'light')
  } catch {}
}
