module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  //JS Config:
  extends: [
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
    //TS Config:
    {
      files: ["*.ts"],
      extends: [
        /*
         * NPM package: @typescript-eslint/eslint-plugin
         * Description: eslint rules for TypeScript
         */
        "plugin:@typescript-eslint/recommended",

        /*
        * KEEP IT AT THE END:
        * NPM package: eslint-config-prettier
        * Description: Turns of all TypeScript rules which might conflict with prettier
        */
        "prettier/@typescript-eslint",
      ]
    },
    {
      "files": [
        "**/*.spec.js",
        "**/*.test.js",
      ],
      "env": {
        "jest": true
      }
    }
  ],
};
