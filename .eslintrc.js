module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      pragma: 'React',
      version: '16.12'
    }
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['@typescript-eslint', 'jest', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/all',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error'
      }
    }
  ]
};
