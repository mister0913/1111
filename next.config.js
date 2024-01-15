module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/trade/BTCUSDT',
        permanent: false,
      },
    ]
  },
}
