module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 容许jest 全局变量
  globals: {
    test: true,
    expect: true
  },
  extends: [
    'standard'
  ],
  // "parserOptions": {
  //     "ecmaVersion": 13
  // },
  rules: {
    camelcase: 'off'
  }
}
