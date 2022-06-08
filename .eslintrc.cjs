/* eslint-env node */
const path = require("path");
/* eslint-disable import/no-extraneous-dependencies */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "airbnb-base",
    "plugin:vuejs-accessibility/recommended",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  settings: {
    "import/resolver": {
      // default node import resolver, internal to eslint-plugin-import
      node: {
        extensions: [".js", ".ts"],
      },
      // alias config, provided for eslint-import-resolver-alias
      alias: {
        map: [["@", path.join(__dirname, "./src")]],
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    semi: ["error", "always"],
    "import/prefer-default-export": 0,
  },
};
