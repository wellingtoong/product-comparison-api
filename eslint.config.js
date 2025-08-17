// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import pluginJest from 'eslint-plugin-jest';
import pluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // Ignora pastas e artefatos gerados
  {
    ignores: ['node_modules', 'coverage', 'dist', 'build', '*.log'],
  },

  // Regras gerais para o código-fonte JS
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // habilita globals de Node
      },
    },
    plugins: {
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise,
      prettier: pluginPrettier, // 👉 adiciona Prettier como plugin
    },
    rules: {
      // Base recomendado do ESLint
      ...js.configs.recommended.rules,

      // Desativa regras conflitantes com Prettier
      ...eslintConfigPrettier.rules,

      // ---- Estilo e qualidade comuns ----
      'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],

      // Desativado pois optamos por usar obj.hasOwnProperty() diretamente
      // ao invés de Object.prototype.hasOwnProperty.call(obj, key)
      // (torna o código mais legível para este projeto específico)
      'no-prototype-builtins': 'off',

      // ---- Imports / Node / Promises ----
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'import/extensions': ['error', 'ignorePackages', { js: 'always', json: 'always' }],
      'import/no-unresolved': 'error',
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-missing-import': ['error', { tryExtensions: ['.js', '.json'] }],
      'promise/catch-or-return': 'error',

      // 👉 Faz o ESLint validar formatação do Prettier
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        node: { extensions: ['.js', '.json'] },
      },
    },
  },

  // Regras específicas para testes (Jest)
  {
    files: ['**/*.{test,spec}.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      'jest/expect-expect': 'off',
    },
  },
];
