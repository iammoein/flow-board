<template>
  <div class="issue-view">
    <IssueList />
    <IssueDetail
      v-if="selectedIssue"
      :issue="selectedIssue"
      class="issue-view__detail"
    />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useIssuesStore } from '@/stores/issues.store';

import IssueDetail from '@/components/Issues/issue-detail.component.vue';
import IssueList from '@/components/Issues/issue-list.component.vue';
import { computed } from 'vue';

const route = useRoute();
const store = useIssuesStore();

const selectedIssue = computed(() =>
  store.getIssueById(Number(route.params.id)),
);
</script>

<style lang="scss" scoped>
.issue-view {
  position: relative;
  height: 100%;

  &__detail {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
