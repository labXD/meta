/*
 * @rushstack/eslint-patch is used to include plugins as dev
 * dependencies instead of imposing them as peer dependencies
 *
 * https://www.npmjs.com/package/@rushstack/eslint-patch
 */
const keptPaths = []
const sortedPaths = []
const cwd = process.cwd().replace(/\\/g, "/")
const originalPaths = require.resolve.paths("eslint-plugin-import")

for (let i = originalPaths.length - 1; i >= 0; i--) {
  const currentPath = originalPaths[i]

  if (currentPath.replace(/\\/g, "/").startsWith(cwd)) {
    sortedPaths.push(currentPath)
  } else {
    keptPaths.unshift(currentPath)
  }
}

// maintain order of node_modules outside of cwd
sortedPaths.push(...keptPaths)

const hookPropertyMap = new Map(
  [
    ["eslint-plugin-import", "eslint-plugin-import"],
    ["eslint-plugin-react", "eslint-plugin-react"],
    ["eslint-plugin-simple-import-sort", "eslint-plugin-simple-import-sort"],
    ["eslint-plugin-jsx-a11y", "eslint-plugin-jsx-a11y"],
  ].map(([request, replacement]) => [
    request,
    require.resolve(replacement, { paths: sortedPaths }),
  ])
)

const mod = require("module")
const resolveFilename = mod._resolveFilename
mod._resolveFilename = function (request, parent, isMain, options) {
  const hookResolved = hookPropertyMap.get(request)
  if (hookResolved) {
    request = hookResolved
  }
  return resolveFilename.call(mod, request, parent, isMain, options)
}

require("@rushstack/eslint-patch/modern-module-resolution")

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "eslint:recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "no-unused-vars": ["off"],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "react/no-unknown-property": "off",
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "no-unused-vars": ["error", { ignoreRestSiblings: true }],
      },
    },
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-unused-vars": ["off"],
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
}
