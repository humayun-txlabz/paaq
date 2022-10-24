const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfiguration = {
  distDir: 'build',
  target: 'serverless', //will output independent pages that don't require a monolithic server. It's only compatible with next start or Serverless deployment platforms (like ZEIT Now) — you cannot use the custom server API.
  images: {
    disableStaticImages: true,
    domains: ['images.ctfassets.net']
  }
};

module.exports = withPlugins([optimizedImages], nextConfiguration);
