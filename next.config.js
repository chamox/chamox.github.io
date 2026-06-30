/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages is a static host: no Node server, no SSR/ISR/API routes.
  // `export` prerenders the whole site to ./out at build time.
  output: 'export',
  // No image optimization server exists on Pages, so images must be unoptimized.
  images: { unoptimized: true },
  // Rewrite barrel imports (react-icons, etc.) to direct paths: smaller bundle, faster builds.
  experimental: {
    optimizePackageImports: ['react-icons', 'react-activity-calendar', 'react-tooltip'],
  },
}

module.exports = nextConfig
