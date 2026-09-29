<template>
  <header class="header">
    <div class="header__heading">
      <h6 class="header__title">{{ headerTitle }}</h6>
    </div>
    <div class="header__actions">
      <SearchBar v-model="input" class="header__actions-search" />
      <button
        class="header__theme-toggle"
        :title="`Current theme: ${theme}. Click to switch`"
        type="button"
        @click="toggleTheme"
      >
        <BaseIcon :icon="isDark ? SunIcon : MoonIcon" :size="16" />
      </button>
      <base-button
        variant="primary"
        class="header__actions-button"
        @click="handleOpenModal"
      >
        <BaseIcon :icon="PlusIcon" :size="9" />
        New
      </base-button>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/base/base-button.component.vue';
import BaseIcon from '@/components/base/base-icon.component.vue';
import SearchBar from '@/components/shared/search-bar.component.vue';

import PlusIcon from '@/components/icons/plus.icon.vue';
import SunIcon from '@/components/icons/sun.icon.vue';
import MoonIcon from '@/components/icons/moon.icon.vue';

import { useTheme } from '@/composables/use-theme.composable.js';
import { useProjectsStore } from '@/stores/projects.store';
import { storeToRefs } from 'pinia';

defineProps({
  headerTitle: {
    type: String,
    default: 'header',
  },
});

const { theme, isDark, toggleTheme } = useTheme();

const projectsStore = useProjectsStore();
const { isCreateProjectModal } = storeToRefs(projectsStore);

const handleOpenModal = () => {
  isCreateProjectModal.value = true;
};

const input = ref('');
</script>

<style scoped lang="scss">
.header {
  @include flex($align: center, $justify: space-between);

  height: rem(64);
  width: 100%;
  padding-inline: space(6);

  border-bottom: 1px solid $neutral-outline;
  background-color: $neutral-surface-container;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &__title {
    color: $neutral-on-surface;

    font-size: rem(16);
    font-weight: 500;
  }

  &__actions {
    @include flex($align: center);
    gap: space(3);
  }

  &__theme-toggle {
    @include button-reset;
    @include flex(row, center, center);
    width: rem(36);
    height: rem(36);
    border-radius: $radius-md;
    border: 1px solid $neutral-outline;
    color: $neutral-on-surface-variant;
    background-color: $neutral-surface;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: $neutral-on-surface;
      background-color: $state-hover;
      border-color: $neutral-outline-variant;
    }
  }

  &__actions-search {
    width: rem(220);
    height: rem(36);
  }

  &__actions-button {
    @include flex($justify: center, $align: center);
    gap: space(1.5);

    font-size: rem(12);
  }
}
</style>
