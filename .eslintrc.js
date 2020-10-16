'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'script',
  },
  extends: ['eslint:recommended'],
  env: {
    node: true,
    browser: true,
  },
};
