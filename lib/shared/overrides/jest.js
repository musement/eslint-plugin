const jestOverride = {
  "files": [
    "**/*.spec.js",
    "**/*.test.js",
    "**/__mocks__/**/*",
    "**/__tests__/**/*"
  ],
  "env": {
    "jest": true,
    "node": true,
  }
}

module.exports = {
  jestOverride
}
