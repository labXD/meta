require("@rushstack/eslint-patch/modern-module-resolution");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["./_base.js"].map(require.resolve),
};
