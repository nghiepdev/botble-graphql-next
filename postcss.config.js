module.exports = {
  plugins: [
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        stage: 2,
        features: {},
      },
    ],
  ],
};
