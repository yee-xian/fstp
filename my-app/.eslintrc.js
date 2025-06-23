/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  plugins: ["@typescript-eslint", "react-refresh"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true }
    ]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
