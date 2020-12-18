module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",

    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",

    "prettier",
    "prettier/vue",

    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    camelcase: "off"
  }
};
