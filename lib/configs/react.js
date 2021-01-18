module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    jest: true,
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
  overrides: [
    //TS Config:
    {
      files: ["*.ts", "*.tsx"],
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
      ],
      rules: {
        "no-unused-vars": "off",
        /*
         * This rule extends the base eslint/no-unused-vars rule.
         * It adds support for TypeScript features, such as types.
         */
        "@typescript-eslint/no-unused-vars": [
          "error",
          { vars: "all", args: "after-used", ignoreRestSiblings: true },
        ],
      },
    },
  ],
};
