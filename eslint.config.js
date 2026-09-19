import eslintPluginVue from "eslint-plugin-vue";

export default [
  ...eslintPluginVue.configs["flat/recommended"],
  {
    rules: {
      "vue/attributes-order": "error",
    },
  },
];
