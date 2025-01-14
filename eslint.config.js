import pluginVue from 'eslint-plugin-vue';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVitest from '@vitest/eslint-plugin';
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,
  {
    rules: {
      semi: ['error', 'always'],
      'max-len': ['error', {
        code: 100,
      }],
      eqeqeq: ['error', 'always'],
      'vue/max-len': ['error', {
        'code': 100,
        'template': 100,
        'comments': 100,
      }],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];
