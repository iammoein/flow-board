<template>
  <header class="header">
    <div class="header__heading">
      <h6 class="header__title">{{ headerTitle }}</h6>
    </div>
    <div class="header__actions">
      <SearchBar v-model="input" class="header__actions-search" />
      <base-button variant="primary" class="header__actions-button">
        <BaseIcon :icon="PlusIcon" :size="9" />
        New
      </base-button>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

import BaseButton from "@/components/base/base-button.component.vue";
import BaseIcon from "@/components/base/base-icon.component.vue";
import SearchBar from "@/components/shared/search-bar.component.vue";

import PlusIcon from "@/components/icons/plus.icon.vue";

defineProps({
  headerTitle: {
    type: String,
    default: "header",
  },
});

const input = ref("");
</script>

<style scoped lang="scss">
.header {
  @include flex($align: center, $justify: space-between);

  height: rem(64);
  width: 100%;
  padding-inline: space(6);

  border-bottom: 1px solid $neutral-outline;
  background-color: $white;

  &__title {
    color: $neutral-on-surface;

    font-size: rem(16);
    font-weight: 500;
  }

  &__actions {
    @include flex($align:center);
    gap: space(4);
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
