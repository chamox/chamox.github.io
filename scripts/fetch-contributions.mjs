// Fetches the GitHub contribution calendar and writes data/contributions.json,
// baked into the static site at build time. Uses the official GraphQL API when a
// token is present (CI), and falls back to a public proxy (local preview / no token).
import { writeFile, mkdir } from 'node:fs/promises'

const LOGIN = 'chamox'
const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 }

async function fromGraphQL(token) {
  const query = `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions weeks{contributionDays{date contributionCount contributionLevel}}}}}}`
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { login: LOGIN } }),
  })
  if (!res.ok) throw new Error(`GraphQL ${res.status}`)
  const json = await res.json()
  if (json.errors) throw new Error(json.errors[0].message)
  const cal = json.data.user.contributionsCollection.contributionCalendar
  const days = cal.weeks.flatMap((w) =>
    w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount, level: LEVELS[d.contributionLevel] })),
  )
  return { total: cal.totalContributions, days }
}

async function fromProxy() {
  const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${LOGIN}?y=last`)
  if (!res.ok) throw new Error(`proxy ${res.status}`)
  const json = await res.json()
  return {
    total: json.total.lastYear,
    days: json.contributions.map((c) => ({ date: c.date, count: c.count, level: c.level })),
  }
}

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN
// Security: with a token (CI / production) use ONLY the official GitHub API — never
// the third-party proxy. The proxy is for local preview without a token. If the
// official fetch fails in CI, throw so the step can keep the last committed data.
const data = token ? await fromGraphQL(token) : await fromProxy()

// Validate shape before persisting (defends against a malformed upstream response).
if (!Number.isFinite(data.total) || !Array.isArray(data.days)) {
  throw new Error('Unexpected contributions payload shape')
}
const days = data.days.map((d) => ({
  date: String(d.date).slice(0, 10),
  count: Math.max(0, Number(d.count) || 0),
  level: Math.min(4, Math.max(0, Number(d.level) || 0)),
}))

await mkdir('data', { recursive: true })
await writeFile('data/contributions.json', JSON.stringify({ total: Math.max(0, data.total), days }))
console.log(`Wrote data/contributions.json — ${days.length} days, ${data.total} total`)
