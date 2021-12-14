module.exports = {
  root: true,
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  // extends: ['eslint:recommended', 'plugin:vue/recommended', 'standard'],
  extends: ['eslint:recommended', 'standard'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' }
    ],
    'no-eval': ['error', { allowIndirect: true }],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    quotes: ['error', 'single', { allowTemplateLiterals: true }]
  },
  globals: {
    $: 'readonly',
    moment: 'readonly'
  }
}
