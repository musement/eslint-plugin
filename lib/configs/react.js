const {jestOverride} = require('../shared/overrides/jest')
const {typeScriptOverride} = require('../shared/overrides/typeScript')
const {rootConfigFilesOverride} = require('../shared/overrides/rootConfigFiles')

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
  },
  extends: [
    "eslint:recommended",

    /*
     * NPM package: eslint-plugin-react
     * Description: React specific linting rules for ESLint
     */
    "plugin:react/recommended",

    /*
     * NPM package: eslint-plugin-react-hooks
     * Description: This ESLint plugin enforces the Rules of Hooks: https://reactjs.org/docs/hooks-rules.html
     */
    "plugin:react-hooks/recommended",

    /*
     * KEEP IT AT THE END:
     * NPM package: eslint-plugin-prettier
     * Description: Runs prettier as an Eslint rule with recommended settings
     */
    "plugin:prettier/recommended",

    /*
     * KEEP IT AT THE END:
     * NPM package: eslint-config-prettier
     * Description: Turns of all eslint-plugin-react rules which might conflict with prettier
     */
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",

    // This rule is aimed at eliminating unused variables, functions, and function parameters.
    "no-unused-vars": [
      "error",
      {
        vars: "all", // default value
        args: "after-used", // default value
        /*
         * default: false
         * Using a Rest Property it is possible to "omit" properties from an object,
         * but by default the sibling properties are marked as "unused".
         * With this option enabled the rest property's siblings are ignored
         */
        ignoreRestSiblings: true,
      },
    ],
  },
  settings: {
    /*
     * NPM package: eslint-plugin-react
     * Description: React settings https://github.com/yannickcr/eslint-plugin-react#configuration
     */
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
  },
  overrides: [typeScriptOverride, rootConfigFilesOverride, jestOverride],
};
