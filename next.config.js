/** @type {import('next').NextConfig} */

require('dotenv').config({
  path: './.env'
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseUrl: process.env.BASE_URL
  }
};

module.exports = nextConfig
