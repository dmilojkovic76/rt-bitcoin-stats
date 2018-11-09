module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process. env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': ['error', 'double'],
    'linebreak-style':['error', 'windows'],
    'no-param-reassign': 0,
    'no-ternary': 0,
    'no-nested-ternary': 0,
    'no-unneeded-ternary': 'error',
    'max-len': ['error', 150],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
