<template>
  <ul class="issue-list">
    <li v-for="issue in issues" class="issue-list__item">
      <IssueCard :issue-title="issue.title" :issue-date="issue.date" />
    </li>
  </ul>
</template>

<script setup>
import { useIssuesStore } from "@/stores/issues.store";
import { storeToRefs } from "pinia";

import IssueCard from "./issue-card.component.vue";

const store = useIssuesStore();

const { issues } = storeToRefs(store);
</script>

<style lang="scss" scoped>
.issue-list {
  @include flex(column);
  gap: space(2.5);
}
</style>
