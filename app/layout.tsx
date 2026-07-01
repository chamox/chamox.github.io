import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import SmoothAnchors from '@/components/SmoothAnchors'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://chamox.dev'),
  title: 'Samuel Zúñiga · Software Engineer',
  description:
    'Software engineer in Santiago, Chile, building web products and AI agent systems.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Samuel Zúñiga',
    description: 'Software engineer building web products and AI agent systems.',
    type: 'website',
  },
}

// Mobile browser chrome matches the page background (light/dark).
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
}

// Apply the saved/system theme before paint to avoid a flash of the wrong mode.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SmoothAnchors />
        {children}
      </body>
    </html>
  )
}
