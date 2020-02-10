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
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx}',
              './components/**/*.{js,jsx}',
              './layouts/**/*.{js,jsx}',
              './modules/**/*.{js,jsx}',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
  ].filter(Boolean),
};
