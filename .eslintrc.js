module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  extends: ['react-app', 'prettier'],
  globals: {
    __PATH_PREFIX__: true,
    Atomics: `readonly`,
    SharedArrayBuffer: `readonly`
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: `module`
  },
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
