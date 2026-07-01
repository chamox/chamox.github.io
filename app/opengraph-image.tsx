import { ImageResponse } from 'next/og'

// Static OG card generated at build time (text + teal accent, no photo).
export const dynamic = 'force-static'
export const alt = 'Samuel Zúñiga · Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          backgroundColor: '#18181b',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ width: 70, height: 6, backgroundColor: '#2dd4bf', marginBottom: 40 }} />
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: '-0.03em' }}>Samuel Zúñiga</div>
        <div style={{ marginTop: 20, fontSize: 40, color: '#2dd4bf' }}>
          Software engineer, gamer, and cueca dancer.
        </div>
        <div style={{ marginTop: 'auto', fontSize: 30, color: '#a1a1aa' }}>chamox.dev</div>
      </div>
    ),
    { ...size },
  )
}
