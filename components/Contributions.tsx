'use client'

import { cloneElement } from 'react'
import { ActivityCalendar } from 'react-activity-calendar'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import contributions from '@/data/contributions.json'
import { useDict, useLang } from '@/lib/lang'
import { useDark } from '@/lib/theme'

export default function Contributions() {
  const dark = useDark()
  const t = useDict()
  const lang = useLang()
  if (!contributions.days?.length) return null

  const fmtDate = (iso: string) => {
    const [y, m, d] = iso.split('-')
    const month = t.github.months[Number(m) - 1]
    return lang === 'es' ? `${Number(d)} ${month} ${y}` : `${month} ${Number(d)}, ${y}`
  }

  return (
    <section>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
        {t.github.heading}
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
          labels={{
            totalCount: t.github.label,
            months: t.github.months,
            weekdays: t.github.weekdays,
            legend: { less: t.github.less, more: t.github.more },
          }}
          renderBlock={(block, activity) => {
            const count =
              activity.count === 0
                ? `${t.github.none} ${t.github.many}`
                : `${activity.count} ${activity.count === 1 ? t.github.one : t.github.many}`
            return cloneElement(block, {
              'data-tooltip-id': 'gh-tooltip',
              'data-tooltip-content': `${count} ${t.github.on} ${fmtDate(activity.date)}`,
            })
          }}
        />
        <Tooltip id="gh-tooltip" />
      </div>
    </section>
  )
}
