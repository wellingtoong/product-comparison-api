// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import pluginN from 'eslint-plugin-n';
import pluginPromise from 'eslint-plugin-promise';
import pluginJest from 'eslint-plugin-jest';

export default [
  // Ignora pastas e artefatos gerados
  {
    ignores: [
      'node_modules',
      'coverage',
      'dist',
      'build',
      '*.log'
    ],
  },

  // Regras gerais para o código-fonte JS
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node, // habilita globals de Node (require, module etc. — ainda que você use ESM)
      },
    },
    plugins: {
      import: pluginImport,
      n: pluginN,
      promise: pluginPromise,
    },
    rules: {
      // Base recomendado do ESLint
      ...js.configs.recommended.rules,

      // ---- Estilo e qualidade comuns ----
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],

      // ---- Imports / Node / Promises ----
      // Mantém ordem e linhas em branco entre grupos de import
      'import/order': ['error', {
        groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
        'newlines-between': 'always'
      }],
      // Resolve imports .js e .json
      'import/extensions': ['error', 'ignorePackages', { js: 'always', json: 'always' }],
      'import/no-unresolved': 'error',

      // Node plugin: desabilita checagem de "features não suportadas" para permitir ESM moderno
      'n/no-unsupported-features/es-syntax': 'off',
      // Garante que imports apontem para arquivos existentes
      'n/no-missing-import': ['error', { tryExtensions: ['.js', '.json'] }],

      // Promises: incentive catch/return
      'promise/catch-or-return': 'error',
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
        ...globals.jest, // habilita describe, it, expect, jest, etc.
      },
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      // Evita falsos positivos quando usa Supertest (muitos testes não têm expect direto)
      'jest/expect-expect': 'off',
    },
  },
];
