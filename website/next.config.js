/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');
var DocsDataPlugin = require('./scripts/.webpack/plugins/DocsDataPlugin');

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/rxn-input/' : '',
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': path.resolve('./node_modules/styled-components'),
    };

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(new DocsDataPlugin());

    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
