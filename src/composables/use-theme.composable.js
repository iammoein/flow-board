import { ref, watch, computed } from 'vue';

const getInitialTheme = () => {
  const saved = localStorage.getItem('theme');
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

const theme = ref(getInitialTheme());

export const useTheme = () => {
  const setTheme = (value) => {
    theme.value = value;
    document.documentElement.dataset.theme = value;
    localStorage.setItem('theme', value);
  };

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark');
  };

  watch(theme, setTheme, { immediate: true });

  return {
    theme,
    isDark: computed(() => theme.value === 'dark'),
    setTheme,
    toggleTheme,
  };
};
