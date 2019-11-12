module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "linebreak-style" : 0,
    "arrow-body-style": 0
  },
  rules: {
    "ecmaFeatures": {
      "js": true
  }
  },
  rules: {
  "linebreak-style": 0,
  "global-require": 0,

  },
};
