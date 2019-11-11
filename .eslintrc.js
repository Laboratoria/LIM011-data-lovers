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
<<<<<<< HEAD
  },
  rules: {
    "linebreak-style" : 0,
    "arrow-body-style": 0
=======
<<<<<<< HEAD
  },
  rules: {
=======
    "ecmaFeatures": {
      "js": true
  }
  },
  rules: {
  "linebreak-style": 0,
  "global-require": 0,
>>>>>>> 696e62344b99de5eee1a532e68fa13ea6747a9b0
>>>>>>> d4f8582ada4a214cf3ac64e707d133bcbdd946aa
  },
};
