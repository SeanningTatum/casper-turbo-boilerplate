module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "prettier",
    "@kensho-technologies/eslint-config",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "@typescript-eslint/indent": "off",
    // 'react/prop-types': [true, { ignore: 'className' }],
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/destructuring-assignment": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "react/jsx-no-constructed-context-values": "warn",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "prefer-destructuring": "off",
  },
  plugins: ["react"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
