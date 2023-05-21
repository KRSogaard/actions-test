module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser", // if not already added
  plugins: ["solid"],
  extends: ["eslint:recommended", "plugin:solid/typescript"],
  rules: {},
};
