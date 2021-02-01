const jestOverride = {
  files: [
    "**/*.spec.js",
    "**/*.test.js",
    "**/__mocks__/**/*",
    "**/__tests__/**/*",
  ],
  env: {
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": "error",

    // disable conflict TS rule. If TS is enabled for all files
    // const x = require('x') will throw an error. TS expects syntax:
    // import x = require('x') which is not supported by ES
    "@typescript-eslint/no-var-requires": "off",
  },
};

module.exports = {
  jestOverride,
};
