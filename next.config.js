/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.wine.com.br',
      'img.wine.com.br',
    ]
  },
  async rewrites() {
    return [
      {
        source: '/conta',
        destination: '/account'
      },
      {
        source: '/clube',
        destination: '/club'
      },
      {
        source: '/loja/mobile',
        destination: '/store/mobile'
      },
      {
        source: '/loja',
        destination: '/store'
      },
      {
        source: '/loja/vinho/:pid',
        destination: '/store/:pid'
      },
      {
        source: '/produtores',
        destination: '/makers'
      },
      {
        source: '/ofertas',
        destination: '/offers'
      },
      {
        source: '/eventos',
        destination: '/events'
      },
    ];
  }
}

module.exports = nextConfig
