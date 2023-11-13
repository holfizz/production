module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "unused-imports",
        "i18next",
        "react-hooks",
    ],
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "unused-imports/no-unused-imports": "error",
        indent: [2, 4],
        semi: [2, "never"],
        "react/jsx-filename-extension": [
            2,
            {
                extensions: [".js", ".jsx", ".tsx", ".ts"],
            },
        ],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "off",
        "react/require-default-props": "off",
        "react/react-in-jsx-scope": "off",
        "react/function-component-definition": "off",
        "no-shadow": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-props-no-spreading": "off",
        "no-underscore-dangle": "off",
        "react/no-deprecated": "off",
        "max-len": [
            "error",
            {
                ignoreComments: true,
                code: 120,
            },
        ],
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testId", "to"],
            },
        ],    "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-param-reassign": "off",
        "react/prop-types": 0,
        "react/display-name":"off"
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ["**/src/**/*.{test, stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": 'off',
            },
        },
    ],
}
