module.exports = {
  env: {
    jest: true
  },
  extends: 'standard-with-typescript',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}