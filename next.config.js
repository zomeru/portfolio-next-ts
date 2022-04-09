module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  async redirect() {
    return [
      {
        source: '/',
        destination: 'https://zomer.xyz',
        permanent: false,
      },      
    ]
  }
};
