module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    indent: ['warn', 2],
    'no-console': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-const': 'warn',
    'max-len': ['error', { code: 120 }],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': ['error', 'unix'],
    'array-bracket-spacing': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'react/prop-types': 'off',
    // 'no-restricted-imports': ['error', { patterns: ['.*'] }],
    "@typescript-eslint/no-explicit-any": "warn",
    '@typescript-eslint/ban-ts-comment': "warn",
    'react/display-name': 'off', // ['warn', { "ignoreTranspilerName": true, "checkContextObjects": false }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        }
      }
    ],
  },
}
