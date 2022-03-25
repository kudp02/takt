/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
//const withTM = require('next-transpile-modules');

//module.exports = nextConfig

module.exports = {
  images: {
    domains: ['takt.digital'],
  },
  transpileModules: ['gsap']
}
