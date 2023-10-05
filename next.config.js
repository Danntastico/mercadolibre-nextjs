/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['http2.mlstatic.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'http2.mlstatic.com',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig

