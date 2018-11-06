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
    'quotes': ['warn', 'double'],
    'linebreak-style':['warn', 'windows']
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
