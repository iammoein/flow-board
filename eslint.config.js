import eslintPluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  ...eslintPluginVue.configs['flat/recommended'],

  {
    rules: {
      'vue/attributes-order': 'error',
    },
  },

  eslintConfigPrettier,
];
