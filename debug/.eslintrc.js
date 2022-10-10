{
  "root": true,
  "overrides": [
    {
      "files": "**/*.+(ts|tsx)",
      "parser": "@typescript-eslint/parser",
      "plugins": ["@typescript-eslint", "react-native", "import"],
      "extends": ["plugin:react/recommended", "prettier", "plugin:@typescript-eslint/recommended"],
      "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "@typescript-eslint/explicit-module-boundary-types": "off"
      }
    },
    {
      "files": "**/*.+(js|jsx)",
      "env": {
        "commonjs": true,
        "es6": true,
        "node": true
      },
      "parserOptions": {
        "ecmaVersion": 2018
      },
      "extends": ["eslint:recommended", "prettier"]
    }
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
