module.exports = {
  plugins: [
    'tailwindcss',
    process.env.NODE_ENV === 'production'
      ? [
          '@fullhuman/postcss-purgecss',
          {
            content: [
              './pages/**/*.{js,jsx}',
              './components/**/*.{js,jsx}',
              './layouts/**/*.{js,jsx}',
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    [
      'postcss-preset-env',
      {
        stage: 2,
        features: {},
      },
    ],
  ].filter(Boolean),
};
