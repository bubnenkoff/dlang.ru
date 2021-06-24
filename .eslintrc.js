module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2017
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
  ],
  // required to lint *.vue files
  plugins: [
    "vue"
  ],
  rules: {
    "vue/max-attributes-per-line": "off",
  }};
