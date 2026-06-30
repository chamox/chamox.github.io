'use client'

import { setLang, useLang } from '@/lib/lang'

const LANGS = ['en', 'es'] as const

export default function LanguageToggle() {
  const lang = useLang()
  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full border border-zinc-200 p-0.5 text-xs font-medium dark:border-zinc-800"
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2 py-1 uppercase transition ${
            lang === l
              ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}
