'use client'

import { cloneElement, useSyncExternalStore } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import { Tooltip } from 'react-tooltip'
import contributions from '@/data/contributions.json'

// Follow the site's class-based dark mode (re-render when <html class> changes).
const subscribe = (cb: () => void) => {
  const obs = new MutationObserver(cb)
  obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => obs.disconnect()
}
const isDark = () => document.documentElement.classList.contains('dark')

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split('-')
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`
}

export default function Contributions() {
  const dark = useSyncExternalStore(subscribe, isDark, () => false)
  if (!contributions.days?.length) return null

  return (
    <section className="mt-16">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
        GitHub
      </h2>
      <div className="mt-5 flex justify-start overflow-x-auto pb-1 lg:justify-center">
        <ActivityCalendar
          data={contributions.days}
          colorScheme={dark ? 'dark' : 'light'}
          theme={{
            light: ['#f4f4f5', '#99f6e4', '#5eead4', '#2dd4bf', '#0d9488'],
            dark: ['#27272a', '#134e4a', '#0f766e', '#0d9488', '#2dd4bf'],
          }}
          blockSize={11}
          blockMargin={3}
          fontSize={13}
          showWeekdayLabels
          labels={{ totalCount: '{{count}} contributions in the last year' }}
          renderBlock={(block, activity) =>
            cloneElement(block, {
              'data-tooltip-id': 'gh-tooltip',
              'data-tooltip-content': `${activity.count === 0 ? 'No' : activity.count} contribution${
                activity.count === 1 ? '' : 's'
              } on ${fmtDate(activity.date)}`,
            })
          }
        />
        <Tooltip id="gh-tooltip" />
      </div>
    </section>
  )
}
