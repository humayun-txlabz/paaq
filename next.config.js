const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  // distDir: "_next",
  // assetPrefix: './',
  // publicRuntimeConfig: {
  //   basePath: "/src",
  // },
  // basePath: "/src",
  distDir: 'build',
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  reactStrictMode: false,
  images: {
    unoptimized: true,
    disableStaticImages: true,
    domains: ['images.ctfassets.net']
  },
  env: {
    CONTENTFUL_SPACE_ID: 'f35zh50bh0q8',
    CONTENTFUL_ACCESS_TOKEN: 'HBb_zsbYezQhuwa9UdagqTWf46-2rXF8Fkqy4TrefbI'
  },
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
