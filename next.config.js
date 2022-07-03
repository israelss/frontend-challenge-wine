/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/loja/mobile',
        destination: '/store/mobile'
      },
      {
        source: '/loja',
        destination: '/store'
      },
    ];
  }
}

module.exports = nextConfig
