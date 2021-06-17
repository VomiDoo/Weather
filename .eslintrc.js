module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  globals: {
    fetch: true,
    document: true,
    localStorage: true,
    navigator: true,
    location: true,
    _: true,
  },
  ignorePatterns: ["main.js"],
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "max-classes-per-file": "off",
    "no-console": "off",
    "no-restricted-globals": ["error", "event", "fdescribe"],
    "no-plusplus": "off",
    "prettier/prettier": "error",
  },
};
