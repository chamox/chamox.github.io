'use client'

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi2'
import { useDark, toggleTheme } from '@/lib/theme'

export default function ThemeToggle() {
  const dark = useDark()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="rounded-full border border-zinc-200 p-2 text-zinc-600 transition hover:text-teal-500 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-teal-400"
    >
      {dark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  )
}
