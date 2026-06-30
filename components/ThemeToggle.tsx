'use client'

import { useSyncExternalStore } from 'react'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'

// Theme is the `dark` class on <html>; read it as external state (no setState-in-effect).
const listeners = new Set<() => void>()
const subscribe = (cb: () => void) => {
  listeners.add(cb)
  return () => listeners.delete(cb)
}
const isDark = () => document.documentElement.classList.contains('dark')

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false)

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    listeners.forEach((l) => l())
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:text-teal-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-teal-400"
    >
      {dark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  )
}
