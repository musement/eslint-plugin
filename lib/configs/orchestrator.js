module.exports = {
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
  ],
  plugins: ["vue"],
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    camelcase: "off",
  },
}
