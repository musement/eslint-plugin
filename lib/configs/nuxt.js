const { jestOverride } = require("../shared/overrides/jest");
const { typeScriptOverride } = require("../shared/overrides/typeScript");
const {
  rootConfigFilesOverride,
} = require("../shared/overrides/rootConfigFiles");

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  env: {
    browser: true,
  },
  //JS Config:
  extends: [
    "eslint:recommended",
    /*
     * NPM package: eslint-plugin-vue
     * Description: eslint rules for Vue + parser for .vue
     */
    "plugin:vue/recommended",

    /*
     * NPM package: eslint-plugin-nuxt
     * Description: eslint rules for Nuxt
     */
    "plugin:nuxt/recommended",
    /*
     * NPM package: eslint-plugin-prettier
     * Description: Runs prettier as an Eslint rule with recommended settings
     */
    "plugin:prettier/recommended",

    //Apply ts-rules on all files to allow linting also .vue files
    ...typeScriptOverride.extends,
    /*
     * KEEP IT AT THE END:
     * NPM package: eslint-config-prettier
     * Description: Turns of all Vue rules which might conflict with prettier
     */
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",

    // disable conflict TS rule. If TS is enabled for all files
    // const x = require('x') will throw an error. TS expects syntax:
    // import x = require('x') which is not supported by ES
    "@typescript-eslint/no-var-requires": "off",
  },
  overrides: [jestOverride, rootConfigFilesOverride],
};
