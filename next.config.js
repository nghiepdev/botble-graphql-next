require('dotenv').config();

const {PHASE_PRODUCTION_BUILD} = require('next/constants');
const {withPlugins, optional} = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [
      optional(() =>
        require('@next/bundle-analyzer')({
          enabled: process.env.ANALYZE === 'true',
        }),
      ),
      {},
      [PHASE_PRODUCTION_BUILD],
    ],
  ],
  {
    webpack(config, {dev}) {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty',
      };

      if (dev) {
        config.module.rules.push({
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        });
      }

      return config;
    },

    env: {
      APP_API: process.env.APP_API,
    },
  },
);
