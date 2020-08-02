module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint-config-blvd/react', 'prettier/@typescript-eslint', 'prettier/react', 'plugin:prettier/recommended'],
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
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: [
          { char: '>', alternatives: ['&gt;'] },
          { char: '}', alternatives: ['&#125;'] }
        ]
      }
    ]
  }
}
