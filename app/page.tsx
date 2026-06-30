import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi2'
import ThemeToggle from '@/components/ThemeToggle'

const CV_URL = 'https://www.linkedin.com/in/samuel-zuniga-avila/'
const MAFO_URL = 'https://mafo-app-nine.vercel.app'

const socials = [
  { Icon: FiGithub, href: 'https://github.com/chamox', label: 'GitHub' },
  { Icon: FiLinkedin, href: 'https://www.linkedin.com/in/samuel-zuniga-avila/', label: 'LinkedIn' },
  { Icon: FiMail, href: 'mailto:sezuniga1@uc.cl', label: 'Email' },
]

const interests = [
  'Artificial intelligence',
  'AI agents',
  'Cryptography',
  'Investing',
  'Technology',
  'Gaming',
  'Hiking',
  'Cycling',
]

const stack = [
  'TypeScript',
  'JavaScript',
  'Python',
  'Ruby on Rails',
  'React',
  'Next.js',
  'Vue',
  'Nuxt',
  'Nitro',
  'Node.js',
  'Tailwind CSS',
  'Supabase',
  'PostgreSQL',
  'Vercel',
  'AWS',
  'Git',
]

const experience = [
  {
    org: 'Forest',
    role: 'Software Engineer · London',
    period: '2024 – Present',
    current: true,
    description:
      'Building the app behind an e-bike operation in London, the biggest e-bike market in the world, working day to day with the operations team to keep the fleet running.',
  },
  {
    org: 'Okane Capital',
    role: 'Software Engineer · Santiago',
    period: '2023 – 2024',
    description:
      'Frontend development of internal platforms for a crypto arbitrage fintech. Technologies used were Vue.js, Nuxt and Tailwind.',
  },
  {
    org: 'NotCo',
    role: 'Software Engineer Intern · Chile',
    period: '2023',
    description:
      'Development of platforms to facilitate the multidisciplinary work of food scientists. Technologies used were Vue.js, Python and GraphQL.',
  },
  {
    org: 'BLISSWAY',
    role: 'IT Consultant · Denver, USA',
    period: '2022',
    description:
      'Review of photographic data for the recognition of vehicles and their license plates. Python and React were used for data management.',
  },
  {
    org: 'Buk Chile',
    role: 'Software Engineer Intern · Chile',
    period: '2022',
    description:
      'Implementation of a new notification system in Ruby on Rails and Vue.js with the compensation team.',
  },
  {
    org: 'Facebook',
    role: 'Technical Mentorship Programme · Mentee',
    period: '2021',
    description:
      'A mentorship program focused on algorithms, teamwork and software engineering, covering front and production engineering concepts and how to approach technical interviews.',
  },
]

function SocialLinks({ size = 20 }: { size?: number }) {
  return (
    <div className="flex items-center gap-5">
      {socials.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-zinc-500 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-8">
      <div className="min-h-screen bg-white ring-1 ring-zinc-200/70 dark:bg-zinc-900 dark:ring-zinc-800">
        {/* Header */}
        <header className="px-6 pt-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a
              href="https://github.com/chamox"
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center"
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
                About
              </a>
              <a href="#project" className="rounded-full px-3 py-1.5 transition hover:text-teal-500 dark:hover:text-teal-400">
                Project
              </a>
              <a href="#contact" className="rounded-full px-3 py-1.5 transition hover:text-teal-500 dark:hover:text-teal-400">
                Contact
              </a>
            </nav>
            <div className="flex flex-1 justify-end">
              <ThemeToggle />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 lg:px-12">
          {/* Intro */}
          <section className="max-w-2xl pt-16 sm:pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
              Software engineer, gamer, and cueca dancer.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              My name is Samuel and I&rsquo;m a software engineer based in Santiago,
              Chile. I love building products that people actually use, and lately
              I&rsquo;ve been getting deep into AI and building with agents.
            </p>
          </section>

          {/* About (full width) */}
          <section id="about" className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              About
            </h2>
            <div className="mt-6 flow-root space-y-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <Image
                src="/profile_photo.webp"
                alt="Samuel Zúñiga"
                width={440}
                height={440}
                className="float-right ml-8 mb-2 aspect-[4/5] w-32 rotate-3 rounded-2xl object-cover ring-1 ring-zinc-200 sm:w-44 dark:ring-zinc-800"
              />
              <p>
                I studied Computer Science at Pontificia Universidad Católica de Chile,
                and I have worked across fintech, foodtech and now micromobility. These
                days I work directly with Forest&rsquo;s operations team in London. I am
                remote, and I have also been lucky to work from the London office.
              </p>
              <p>
                I really enjoy learning how things are built. I spend a lot of time
                studying new architectures, PWAs, Domain Driven Design, monorepos, and
                Vercel and its features. Lately I have been especially into AI agents,
                how they work and how to use them well, from skills to commands, and I am
                always reading about where things are heading.
              </p>
              <p>
                Outside of work I&rsquo;m passionate about cueca, the traditional Chilean
                folk dance, and I love gaming, mostly CS2, Minecraft and Tibia. I also
                enjoy cycling and hiking the hills of Santiago. 🤠
              </p>
            </div>

            <h2 className="mt-12 text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Interests
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {interests.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Stack
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <section className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Experience
            </h2>
            <ul className="mt-6">
              {experience.map((e) => (
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

          {/* Education + Contact */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <HiOutlineAcademicCap size={18} className="text-zinc-400" />
                Education
              </h2>
              <div className="mt-4">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  Pontificia Universidad Católica de Chile
                </p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  Bachelor of Engineering, Computer Science · 2016 – 2022
                </p>
                <p className="mt-0.5 text-sm text-zinc-500">Major in Software Engineering</p>
                <p className="mt-0.5 text-sm text-zinc-500">Minor in Data Science and Analytics</p>
              </div>
            </div>

            <div id="contact" className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
              <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Get in touch</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Have a project or role in mind? I&rsquo;m open to new opportunities.
              </p>
              <div className="mt-5">
                <SocialLinks size={18} />
              </div>
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-teal-400"
              >
                View CV <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>

          {/* Featured project */}
          <section id="project" className="mt-24">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Project
            </h2>
            <article className="mt-6 flex flex-col gap-6 rounded-2xl border border-zinc-200 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8 dark:border-zinc-800">
              <div className="sm:flex-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">MAFO</h3>
                  <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    In production
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  An accreditation and document compliance platform for events in Chile.
                  Companies submit their workers&rsquo; and vehicles&rsquo; documentation,
                  and reviewers approve it against sector requirements. It has role-based
                  access for admins, reviewers and providers, and it is built for
                  non-technical users so it works without training.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <p className="text-sm text-zinc-500">Next.js · Supabase · TypeScript</p>
                  <a
                    href={MAFO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-teal-500 dark:text-zinc-400 dark:hover:text-teal-400"
                  >
                    Visit <FiArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Compact screenshot */}
              <a
                href={MAFO_URL}
                target="_blank"
                rel="noreferrer"
                className="group block shrink-0 sm:w-56"
              >
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
        <footer className="border-t border-zinc-200 px-6 py-8 text-sm text-zinc-500 sm:px-8 lg:px-12 dark:border-zinc-800">
          © {new Date().getFullYear()} Samuel Zúñiga
        </footer>
      </div>
    </div>
  )
}
