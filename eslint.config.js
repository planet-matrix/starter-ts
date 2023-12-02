import process from "node:process"
import ts from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import eslintConfigPrettier from "eslint-config-prettier"
import unicorn from "eslint-plugin-unicorn"

const files = ["src/**/*.ts", "test/**/*.ts"]
const languageOptions = {
  parser: tsParser,
  parserOptions: {
    project: true,
    tsconfigRootDir: process.cwd(),
  },
}
const linterOptions = {
  reportUnusedDisableDirectives: true,
}
const plugins = {
  "@typescript-eslint": ts,
  unicorn,
}

export default [
  {
    files,
    languageOptions,
    linterOptions,
    plugins,
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],

      ...ts.configs["strict-type-checked"]?.rules,
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-import-type-side-effects": "error",

      ...unicorn.configs.recommended.rules,
      "unicorn/prevent-abbreviations": "off",
    },
  },
  // disable formatting rules, make sure to put this last
  eslintConfigPrettier,
]
