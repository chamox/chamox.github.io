'use client'

import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import ThemeToggle from '@/components/ThemeToggle'
import LanguageToggle from '@/components/LanguageToggle'
import { useDict } from '@/lib/lang'
import { STACK, CV_URL, MAFO_URL, GITHUB_URL } from '@/lib/dictionary'

// Heavy below-the-fold calendar (react-activity-calendar + react-tooltip) split into
// its own chunk, loaded on the client only. Keeps it out of the initial bundle.
const Contributions = dynamic(() => import('@/components/Contributions'), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
})

const socials = [
  { Icon: FiGithub, href: GITHUB_URL, label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/samuel-zuniga-avila/', label: 'LinkedIn' },
  { Icon: FiMail, href: 'mailto:sezuniga1@uc.cl', label: 'Email' },
]

function SocialLinks() {
  return (
    <div className="flex items-center gap-5">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="-m-2 p-2 text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  )
}

const chipClass =
  'rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'
const eyebrow =
  'text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400'

export default function Home() {
  const t = useDict()

  return (
    <div className="mx-auto max-w-7xl sm:px-8">
      <div className="min-h-screen bg-white ring-1 ring-zinc-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
        {/* Header */}
        <header className="px-6 pt-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
              aria-label="GitHub profile"
            >
              <Image
                src="/avatar.webp"
                alt="Samuel Zúñiga"
                width={40}
                height={40}
                priority
                className="h-10 w-10 rounded-full object-cover ring-1 ring-zinc-200 transition hover:opacity-85 dark:ring-zinc-700"
              />
            </a>
            <nav className="hidden rounded-full bg-white/90 px-2 py-1.5 text-sm font-medium text-zinc-700 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur sm:flex dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <a href="#about" className="rounded-full px-3 py-1.5 transition hover:text-teal-500 dark:hover:text-teal-400">
                {t.nav.about}
              </a>
              <a href="#project" className="rounded-full px-3 py-1.5 transition hover:text-teal-500 dark:hover:text-teal-400">
                {t.nav.project}
              </a>
              <a href="#contact" className="rounded-full px-3 py-1.5 transition hover:text-teal-500 dark:hover:text-teal-400">
                {t.nav.contact}
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 lg:px-12">
          {/* Intro */}
          <section className="pt-16 sm:pt-24">
            <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between sm:gap-10">
              <div className="max-w-2xl">
                <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
                  {t.hero.title}
                </h1>
                <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.hero.bio}
                </p>
              </div>
              <Image
                src="/profile_photo.webp"
                alt="Samuel Zúñiga"
                width={440}
                height={440}
                priority
                className="aspect-[4/5] w-40 shrink-0 rotate-3 rounded-2xl object-cover ring-1 ring-zinc-200 sm:w-44 lg:w-48 dark:ring-zinc-800"
              />
            </div>
          </section>

          {/* About */}
          <section id="about" className="mt-20">
            <h2 className={eyebrow}>{t.about.heading}</h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <h2 className={`mt-12 ${eyebrow}`}>{t.interests.heading}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t.interests.items.map((item) => (
                <li key={item} className={chipClass}>{item}</li>
              ))}
            </ul>

            <h2 className={`mt-10 ${eyebrow}`}>{t.stack.heading}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {STACK.map((item) => (
                <li key={item} className={chipClass}>{item}</li>
              ))}
            </ul>

            <h2 className={`mt-10 ${eyebrow}`}>{t.beyond.heading}</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {t.beyond.items.map((item) => (
                <li key={item} className={chipClass}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="mt-16">
            <h2 className={eyebrow}>{t.experience.heading}</h2>
            <ul className="mt-6">
              {t.experience.items.map((e) => (
                <li
                  key={e.org}
                  className="border-b border-zinc-100 py-5 first:pt-0 last:border-0 last:pb-0 dark:border-zinc-800"
                >
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <p className="font-medium text-zinc-900 dark:text-zinc-100">{e.org}</p>
                    <p
                      className={`shrink-0 text-sm sm:text-right ${
                        e.current ? 'font-medium text-teal-500 dark:text-teal-400' : 'text-zinc-500'
                      }`}
                    >
                      {e.period}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-600 dark:text-zinc-400">{e.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{e.description}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* GitHub contributions (lazy-loaded below the fold) */}
          <div className="mt-16">
            <Contributions />
          </div>

          {/* Education + Contact */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <HiOutlineAcademicCap size={18} aria-hidden className="text-zinc-400" />
                {t.education.heading}
              </h2>
              <div className="mt-4">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{t.education.school}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{t.education.degree}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{t.education.major}</p>
                <p className="mt-0.5 text-sm text-zinc-500">{t.education.minor}</p>
              </div>
            </div>

            <div id="contact" className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t.contact.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{t.contact.body}</p>
              <div className="mt-5">
                <SocialLinks />
              </div>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-teal-400"
              >
                {t.contact.cv} <FiArrowUpRight size={16} aria-hidden />
              </a>
            </div>
          </div>

          {/* Featured project */}
          <section id="project" className="mt-24">
            <h2 className={eyebrow}>{t.project.heading}</h2>
            <article className="mt-6 flex flex-col gap-6 rounded-2xl border border-zinc-200 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 dark:border-zinc-800">
              <div className="sm:flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">MAFO</h3>
                  <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    {t.project.status}
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {t.project.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-sm text-zinc-500">{t.project.tech}</p>
                  <a
                    href={MAFO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
                  >
                    {t.project.visit} <FiArrowUpRight size={16} aria-hidden />
                  </a>
                </div>
              </div>

              <a href={MAFO_URL} target="_blank" rel="noreferrer" className="group block shrink-0 sm:w-56">
                <Image
                  src="/mafo-landing.webp"
                  alt="MAFO landing page"
                  width={640}
                  height={303}
                  className="aspect-[2/1] w-full rounded-lg border border-zinc-200 object-cover object-top transition group-hover:opacity-90 dark:border-zinc-800"
                />
              </a>
            </article>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 px-6 py-8 text-center text-sm text-zinc-500 sm:px-8 lg:px-12 dark:border-zinc-800">
          <p className="inline-flex items-center gap-1.5">
            {t.footer.madeWith}
            <FaHeart size={12} aria-hidden className="text-teal-500 dark:text-teal-400" />
            {t.footer.by}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
            >
              chamox
            </a>
          </p>
          <p className="mt-1" suppressHydrationWarning>© {new Date().getFullYear()} Samuel Zúñiga</p>
        </footer>
      </div>
    </div>
  )
}
