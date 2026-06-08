/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
        experimental: {
    isrMemoryCacheSize: 52 * 1024 * 1024,
      },
}

module.exports = nextConfig
