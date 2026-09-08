<template>
  <div class="search-bar">
    <BaseIcon class="search-bar__icon" :icon="SearchIcon" :size="14" />
    <input
      v-model="model"
      class="search-bar__input"
      :placeholder="placeholder"
    />
    <button class="search-bar__button" @click="handleClickButton(model)">
      {{ button }}
    </button>
  </div>
</template>

<script setup>
import BaseIcon from "../base/base-icon.component.vue";
import SearchIcon from "../icons/search.icon.vue";

const model = defineModel({
  type: String,
  default: "",
});

const emit = defineEmits(["search"]);

defineProps({
  placeholder: {
    type: String,
    default: "Search...",
  },
  button: {
    type: String,
    default: "⌘K",
  },
});

const handleClickButton = (input) => {
  emit("search", input);
};
</script>

<style lang="scss" scoped>
.search-bar {
  @include flex($align: center);
  gap: space(2);

  width: 100%;
  height: 100%;
  padding-inline: space(2);

  background-color: $neutral-surface;
  border: 1px solid $neutral-outline;
  border-radius: $radius-md;

  &__icon {
    color: $gray-400;
  }

  &__input {
    background-color: transparent;
    outline: none;
    border: none;
  }

  &__button {
    @include button-reset;

    padding: space(1) space(0.5);

    background-color: $white;
    border: 1px solid $neutral-outline;
    border-radius: $radius-sm;
    color: $gray-400;

    font-size: rem(10);
  }
}
</style>
