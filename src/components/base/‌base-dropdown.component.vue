<template>
  <div class="base-dropdown" ref="dropdownRef">
    <div class="base-dropdown__field">
      <label v-if="label" :for="dropdownId" class="base-dropdown__label">{{
        label
      }}</label>
      <button
        :id="dropdownId"
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
    <ul class="base-dropdown__menu" v-if="open">
      <li v-if="!options.length">گزینه ای برای نمایش وجود نداره</li>
      <li
        v-for="option in options"
        :key="option.value"
        @click="handleSelect(option.value)"
        class="base-dropdown__menu-item"
      >
        <button class="base-dropdown__menu-button">
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref, useId, useTemplateRef } from "vue";
import { onClickOutside } from "@vueuse/core";

import BaseIcon from "./base-icon.component.vue";
import DownPath from "../icons/down-path.icon.vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  placeholder: {
    type: String,
    default: "Select one item",
  },
  label: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: null,
  },
});

const dropdownRef = useTemplateRef("dropdownRef");
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

    cursor: pointer;

    @include flex($align: center, $justify: space-between);
  }

  &__trigger-icon {
    color: $gray-500;
  }

  &__menu {
    position: absolute;
    z-index: 10;
    width: 100%;
    margin-top: space(1);
    max-height: rem(200);
    overflow-y: auto;

    background-color: $neutral-surface;

    border-radius: space(2);
    box-shadow: 0 rem(4) rem(12) rgba($gray-900, 0.1);
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

    text-align: start;

    cursor: pointer;
    transition: background-color 0.15s ease;

    &:hover {
      background-color: $gray-300;
    }
  }
}
</style>
