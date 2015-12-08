module.exports = {
  // Wait for babel-eslint to support babel 6
  // https://github.com/babel/babel-eslint/issues/199
  // https://github.com/babel/babel-eslint/issues/218
  //"parser": "babel-eslint",

  // Remove this once we are using babel-eslint
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },

  "env": {
    "browser": true,
    "commonjs": true,
    // Remove this once we are using  babel-eslint
    "es6": true
  },

  "plugins": [
    "react"
  ],

  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },

  "extends": "eslint:recommended",
  "rules": {
    // Pre v1 eslint defaults
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-caller": 2,
    "no-catch-shadow": 2,
    "no-empty-label": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-implied-eval": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-process-exit": 2,
    "no-proto": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unused-expressions": 2,
    "no-use-before-define": 2,
    "no-with": 2,
    "camelcase": 2,
    "consistent-return": 2,
    "dot-notation": [2, {"allowKeywords": true}],
    "eol-last": 2,
    "no-extra-parens": [2, "functions"],
    "key-spacing": [2, {"beforeColon": false, "afterColon": true}],
    "new-parens": 2,
    "semi": 2,
    "semi-spacing": [2, {"before": false, "after": true}],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": [2, {"words": true, "nonwords": false}],
    "yoda": [2, "never"],

    // Custom
    "no-underscore-dangle": 0,
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "curly": [2, "multi-line"],
    "space-before-function-paren": [2, "always"],
    "space-after-keywords": [2, "always"],
    "space-before-blocks": [2, "always"],
    "space-in-parens": [2, "never"],
    "object-curly-spacing": [2, "always"],
    "computed-property-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "no-mixed-spaces-and-tabs": 2,
    "spaced-comment": [2, "always"],
    "no-console": 2,
    "no-undef": 2,
    "radix": 2,
    "no-else-return": 2,
    "no-var": 2,
    "brace-style": [2, "1tbs", {"allowSingleLine": true}],
    "func-names": 2,
    "object-shorthand": [2, "always"],
    "prefer-const": 2,
    "arrow-parens": [2, "always"],
    "prefer-arrow-callback": 2,
    "prefer-template": 2,
    "jsx-quotes": [2, "prefer-single"],
    "space-before-keywords": [2, "always"],
    "no-empty-pattern": 2,
    "arrow-body-style": [2, "as-needed"],
    "no-case-declarations": 2,
    "no-constant-condition": 2,

    // React
    "react/display-name": [2, {"acceptTranspilerName": true}],
    "react/forbid-prop-types": [1, {"forbid": ["any", "array", "object"]}],
    "react/jsx-boolean-value": [2, "never"],
    "react/jsx-closing-bracket-location": [1, {"location": "tag-aligned"}],
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, {"maximum": 3}],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": [2, {"ignoreCase": false}],
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 0,
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    "react/no-did-update-set-state": [2, "allow-in-func"],
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 0,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2,

    // Some stuff copied from standard
    "accessor-pairs": 2,
    "arrow-spacing": [2, {"before": true, "after": true}],
    "constructor-super": 2,
    "dot-location": [2, "property"],
    "eqeqeq": [2, "allow-null"],
    "generator-star-spacing": [2, {"before": true, "after": true}],
    "handle-callback-err": [2, "^(err|error)$"],
    "indent": [2, 2, {"SwitchCase": 0}],
    "new-cap": [2, {"newIsCap": true, "capIsNew": false}],
    "no-class-assign": 2,
    "no-cond-assign": 2,
    "no-const-assign": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-multiple-empty-lines": [2, {"max": 1}],
    "no-negated-in-lhs": 2,
    "no-new-require": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-self-compare": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-unexpected-multiline": 2,
    "no-unneeded-ternary": [2, {"defaultAssignment": false}],
    "no-unreachable": 2,
    "no-unused-vars": [2, {"vars": "all", "args": "none"}],
    "no-useless-call": 2,
    "one-var": [2, {"initialized": "never"}],
    "operator-linebreak": [2, "after", {"overrides": {"?": "before", ":": "before"}}],
    "padded-blocks": [2, "never"],
    "quotes": [2, "single", "avoid-escape"],
    "use-isnan": 2,
    "valid-typeof": 2,
    "wrap-iife": [2, "any"]
  }
}
