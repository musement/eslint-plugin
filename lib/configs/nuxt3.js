const {
  rootConfigFilesOverride,
} = require("../shared/overrides/rootConfigFiles");

module.exports = {
  env: {
    browser: true,
  },
  //JS Config:
  extends: [
    /*
     * NPM package: @nuxt/eslint-config
     * Description: Non-opinionated ESlint configuration for Nuxt 3 apps.
     */
    "@nuxt/eslint-config",
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
    "prettier",
  ],
  overrides: [rootConfigFilesOverride],
};
