<template>
  <div ref="dropdownRef" class="base-dropdown">
    <div class="base-dropdown__field">
      <label v-if="label" :for="dropdownId" class="base-dropdown__label">{{
        label
      }}</label>
      <button
        :id="dropdownId"
        type="button"
        class="base-dropdown__trigger"
        @click="handleOpenDropdown"
      >
        <p>{{ selectedLabel }}</p>
        <BaseIcon
          class="base-dropdown__trigger-icon"
          :icon="DownPath"
          :size="8"
        />
      </button>
    </div>
    <ul v-if="open" class="base-dropdown__menu">
      <li v-if="!options.length">گزینه ای برای نمایش وجود نداره</li>
      <li
        v-for="option in options"
        :key="option.value"
        class="base-dropdown__menu-item"
        @click="handleSelect(option.value)"
      >
        <button class="base-dropdown__menu-button">
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, useId, useTemplateRef } from 'vue';
import { onClickOutside } from '@vueuse/core';

import BaseIcon from './base-icon.component.vue';
import DownPath from '../icons/down-path.icon.vue';

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Select one item',
  },
  label: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: null,
  },
});

console.log(props.options);

const dropdownRef = useTemplateRef('dropdownRef');
const model = defineModel();

const open = ref(false);

const uid = useId();
const dropdownId = computed(() => props.id ?? uid);

onClickOutside(dropdownRef, () => (open.value = false));

const handleOpenDropdown = () => {
  open.value = !open.value;
};

const handleSelect = (value) => {
  model.value = value;
  open.value = false;
};

const selectedLabel = computed(() => {
  const found = props.options.find((option) => option.value === model.value);
  return found?.label ?? props.placeholder;
});
</script>

<style scoped lang="scss">
.base-dropdown {
  position: relative;

  width: 100%;

  &__field {
    @include flex(column);
    gap: space(1.5);
  }

  &__label {
    color: $neutral-on-surface-variant;

    font-size: rem(12);
  }

  &__trigger {
    width: 100%;
    height: rem(38);
    padding: space(3) space(2);

    background-color: $neutral-surface;
    border: 1px solid $neutral-outline;
    border-radius: space(2);
    color: $neutral-on-surface;

    cursor: pointer;

    @include flex($align: center, $justify: space-between);
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease;
  }

  &__trigger-icon {
    color: $neutral-on-surface-variant;
  }

  &__menu {
    position: absolute;

    width: 100%;
    margin-top: space(1);
    min-height: rem(50);
    max-height: rem(200);
    padding: space(2) space(3);

    background-color: $neutral-surface-container;
    border: 1px solid $neutral-outline;
    border-radius: space(2);
    box-shadow: $shadow-md;

    overflow-y: auto;
    z-index: 10;
  }

  &__menu-item {
    &:not(:last-child) {
      border-bottom: 1px solid $neutral-outline;
    }
  }

  &__menu-button {
    @include button-reset;

    width: 100%;
    padding: space(2) space(2);
    color: $neutral-on-surface;

    text-align: start;

    cursor: pointer;
    border-radius: $radius-sm;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: $state-hover;
    }
  }
}
</style>
