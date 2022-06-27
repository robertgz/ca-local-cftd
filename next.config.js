/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'opensandiego-voters-v-staging.herokuapp.com',
      'opensandiego-voters-voice.herokuapp.com',
    ],
  }
}

module.exports = nextConfig
