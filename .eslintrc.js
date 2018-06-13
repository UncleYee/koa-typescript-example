module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint-config-alloy/typescript",
  "parser": "typescript-eslint-parser",
  "plugins": ["typescript"],
  "rules": {
    "indent": ["warn", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "curly": [2, "all"],
    "typescript/class-name-casing": "error",
    "typescript/type-annotation-spacing": "warn",
    "typescript/member-ordering": "off",
    "no-undefined": "off",
    "no-console": "off",
    "no-var": "error",
    "no-eval": "off",
    "no-unused-vars": "warn",
    "semi": "off",
    "space-before-blocks": "warn",
    "key-spacing": "warn",
    "arrow-spacing": "warn",
    "comma-spacing": "warn",
    "space-infix-ops": "warn",
    "one-var": "off",
    "object-curly-spacing": "warn",
    "typescript/member-delimiter-style": "warn",
    "no-return-assign": "off",
    "eqeqeq": "off",
    "no-use-before-define": "warn",
    "space-before-function-paren": "warn",
    "no-fallthrough": "warn",
    "no-confusing-arrow": "warn",
    "keyword-spacing": "warn",
    "no-throw-literal": "off",
    "no-useless-constructor": "warn",
    "max-nested-callbacks": "off",
    "max-depth": "off",
    "complexity": "off"
  }
}



// eslint-config-alloy/typescript 中的该项会导致vscode 提示 loc 问题 故重写