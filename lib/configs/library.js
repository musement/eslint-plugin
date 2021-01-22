const { jestOverride } = require('../shared/overrides/jest')
const { typeScriptOverride } = require('../shared/overrides/typeScript')

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    "eslint:recommended",
    /*
    * NPM package: eslint-plugin-prettier
    * Description: Runs prettier as an Eslint rule with recommended settings
    */
    "plugin:prettier/recommended",
  ],

  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    typeScriptOverride,
    jestOverride
  ],
}
