const { jestOverride } = require('../shared/overrides/jest')
const { typeScriptOverride } = require('../shared/overrides/typeScript')

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
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

    /*
    * KEEP IT AT THE END:
    * NPM package: eslint-config-prettier
    * Description: Turns of all Vue rules which might conflict with prettier
    */
    "prettier/vue",
  ],
  rules: {
    'prettier/prettier': 'error'
  },
  overrides: [
    typeScriptOverride,
    jestOverride
  ],
};
