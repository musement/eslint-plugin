module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['vue'],
  rules: {
    'import/order': 0,
    'vue/order-in-components': 2,
    'vue/no-unused-components': 1,
    'vue/attribute-hyphenation': 'off',
    '@typescript-eslint/no-unused-vars': 1,
    'no-unused-vars': 1,
    'vue/no-v-html': 0,
    'no-console': 'warn',
    camelcase: 'off',
    'vue/html-self-closing': [
      1,
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
      },
    ],
  },
}
