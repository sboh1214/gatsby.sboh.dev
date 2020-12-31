module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [`eslint:recommended`, `plugin:react/recommended`, `plugin:react-hooks/recommended`],
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
  plugins: [`react`],
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
