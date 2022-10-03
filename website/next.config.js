/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');
var DocsDataPlugin = require('./.webpack/plugins/DocsDataPlugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config, { isServer }) => {

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    config.plugins.push(new DocsDataPlugin());

    return config
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
