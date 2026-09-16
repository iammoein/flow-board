<template>
  <div class="app-layout">
    <TheSidebar />
    <div class="app-layout__body">
      <TheHeader :header-title="headerTitle" />

      <main class="app-layout__main">
        <RouterView class="app-layout__content" />
        <CreateIssueModal modal-title="Create Issue" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { NAV_ITEMS } from "./constants/routes.contant.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

import TheSidebar from "./components/shared/the-sidebar.component.vue";
import TheHeader from "./layouts/the-header-layout.vue";
import CreateIssueModal from "./components/Issues/create-issue-modal.compoent.vue";

const route = useRoute();

const headerTitle = computed(
  () => NAV_ITEMS.find((item) => item.name === route.name)?.label,
);
</script>

<style lang="scss" scoped>
.app-layout {
  @include flex;

  min-height: 100dvh;
  width: 100%;

  &__body {
    @include flex(column);

    width: 100%;
    min-height: 100dvh;
  }

  &__main {
    position: relative;
    flex: 1;

    min-height: 0;
    width: 100%;

    background-color: $neutral-surface;
  }

  &__content {
    padding: space(6);
    height: 100%;

    overflow-y: auto;
  }
}
</style>
