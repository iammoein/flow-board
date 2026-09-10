<template>
  <div class="app-layout">
    <TheSidebar />
    <main class="app-layout__main" >
      <TheHeader :header-title="headerTitle" />
      <RouterView class="app-layout__content" />
      <CreateIssueModal modal-title="Create Issue"/>
    </main>
  </div>
</template>

<script setup>
import { NAV_ITEMS } from "./constants/routes.contant.js";
import { useRoute } from "vue-router";
import { computed } from "vue";

import TheSidebar from "./components/the-sidebar.component.vue";
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

  width: 100%;

  &__main {
    position: relative;

    width: 100%;
    min-height: 100vh;
    

    background-color: $neutral-surface;
  }

  &__content {
    padding: space(6);
  }
}
</style>