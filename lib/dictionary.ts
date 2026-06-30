import enJson from './locales/en.json'
import esJson from './locales/es.json'

export type Lang = 'en' | 'es'

// Language-neutral data (shared across locales).
export const STACK = [
  'TypeScript', 'JavaScript', 'Python', 'Ruby on Rails', 'React', 'Next.js',
  'Vue', 'Nuxt', 'Nitro', 'Node.js', 'Tailwind CSS', 'Supabase',
  'PostgreSQL', 'Vercel', 'AWS', 'Git',
]

export const CV_URL = 'https://www.linkedin.com/in/samuel-zuniga-avila/'
export const MAFO_URL = 'https://mafo-app-nine.vercel.app'
export const GITHUB_URL = 'https://github.com/chamox'

type Experience = { org: string; role: string; period: string; current?: boolean; description: string }

export type Dict = {
  nav: { about: string; project: string; contact: string }
  hero: { title: string; bio: string }
  about: { heading: string; p1: string; p2: string }
  interests: { heading: string; items: string[] }
  stack: { heading: string }
  beyond: { heading: string; items: string[] }
  experience: { heading: string; items: Experience[] }
  github: {
    heading: string; label: string; on: string; none: string; one: string; many: string
    less: string; more: string; months: string[]; weekdays: string[]
  }
  education: { heading: string; school: string; degree: string; major: string; minor: string }
  contact: { heading: string; body: string; cv: string }
  project: { heading: string; status: string; description: string; tech: string; visit: string }
  footer: { madeWith: string; by: string }
}

export const dictionaries: Record<Lang, Dict> = { en: enJson, es: esJson }
