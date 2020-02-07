module.exports = {
  plugins: [
    'tailwindcss',
    'postcss-nested',
    [
      'postcss-preset-env',
      {
        stage: 2,
        features: {},
      },
    ],
  ],
};
