module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:meteor/recommended',
  ],
  plugins: [
    'meteor',
    'import',
  ],
  settings: {
    'import/resolver': 'meteor'
  },
  
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
=======
    "ecmaFeatures": {
      "js": true
  }
  },
  rules: {
  "linebreak-style": 0,
  "global-require": 0,
>>>>>>> 696e62344b99de5eee1a532e68fa13ea6747a9b0
  },
};
