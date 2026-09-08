<template>
  <header class="header">
    <div class="header__heading">
      <h6 class="header__title">{{ headerTitle }}</h6>
    </div>
    <div class="header__actions">
      <SearchBar v-model="input" class="header__actions-search" />
    </div>
  </header>
</template>

<script setup>
import SearchBar from "@/components/shared/search-bar.component.vue";
import { ref } from "vue";

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

  &__actions-search {
    width: rem(220);
    height: rem(36);
  }
}
</style>
