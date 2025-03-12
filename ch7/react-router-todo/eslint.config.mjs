import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // React 설정 추가
    name: "react-config",
    plugins: {
      react: pluginReact,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // JSX 활성화
        },
      },
    },
    settings: {
      react: {
        version: "detect", // React 버전 자동 감지
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // ✅ React 17+에서는 import 불필요
    },
  },
];
