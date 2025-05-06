/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['allibiya-gases.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/allibiya-gases' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/allibiya-gases/' : '',
}

module.exports = nextConfig 