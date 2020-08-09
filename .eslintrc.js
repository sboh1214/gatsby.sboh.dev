module.exports = {
  globals: {
    __PATH_PREFIX__: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['react-app', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'max-len': ['error', { code: 140, ignoreUrls: true }],
    'import/prefer-default-export': 'off'
  }
}
