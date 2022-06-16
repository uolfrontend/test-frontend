module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'plugin:jest/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'multiline-ternary': ['error', 'never']
  }
}
