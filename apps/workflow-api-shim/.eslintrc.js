module.exports = {
    extends: [
        "eslint:recommended",
        "prettier"
    ],
    env: {
        'es6': true,
        'node': true,
    },
    plugins: [
        "prettier",
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'prettier',
            ],
            parserOptions: { parser: '@typescript-eslint/parser' },
            plugins: [
                'prettier',
                '@typescript-eslint/eslint-plugin',
            ],
            rules: {
                "@typescript-eslint/indent": ["error", 2],
                "@typescript-eslint/no-unused-vars": "error",
                "@typescript-eslint/no-explicit-any": "off"
            },
        },
    ],
}