import { useSyncExternalStore } from 'react'
import { dictionaries, type Lang } from './dictionary'

// Current language as a tiny external store, shared by every component without a
// Context provider. SSR/first render is always 'en' (matches the prerendered HTML);
// the real preference is applied right after mount to avoid hydration mismatches.
let current: Lang = 'en'
let initialized = false
const listeners = new Set<() => void>()

function detect(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'es') return saved
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  if (!initialized) {
    initialized = true
    const next = detect()
    document.documentElement.lang = next
    if (next !== current) {
      current = next
      queueMicrotask(() => listeners.forEach((l) => l()))
    }
  }
  return () => {
    listeners.delete(cb)
  }
}

export function setLang(lang: Lang) {
  if (lang === current) return
  current = lang
  try {
    localStorage.setItem('lang', lang)
  } catch {}
  document.documentElement.lang = lang
  listeners.forEach((l) => l())
}

export function useLang(): Lang {
  return useSyncExternalStore(
    subscribe,
    () => current,
    () => 'en' as Lang,
  )
}

export function useDict() {
  return dictionaries[useLang()]
}
