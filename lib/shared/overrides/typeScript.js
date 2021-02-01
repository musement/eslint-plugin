const typeScriptOverride = {
  files: ["*.ts", "*tsx"],
  extends: [
    /*
     * NPM package: @typescript-eslint/eslint-plugin
     * Description: eslint rules for TypeScript
     */
    "plugin:@typescript-eslint/recommended",

    /*
     * NPM package: @typescript-eslint/eslint-plugin
     * Description: Turn off all eslint-recommended rules which might conflict with @typescript-eslint/recommended
     */
    "plugin:@typescript-eslint/eslint-recommended",

    /*
     * KEEP IT AT THE END:
     * NPM package: eslint-config-prettier
     * Description: Turns off all TypeScript rules which might conflict with prettier
     */
    "prettier/@typescript-eslint",
  ],
};

module.exports = {
  typeScriptOverride
}
