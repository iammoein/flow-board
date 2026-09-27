<template>
  <ul class="issue-list">
    <li
      v-for="issue in issues"
      :key="issue.id"
      class="issue-list__item"
      @click="handleOpenDetail(issue.id)"
    >
      <IssueCard
        :issue-title="issue.title"
        :issue-date="issue.date"
        :issue-number="issue.number"
      />
    </li>
  </ul>
</template>

<script setup>
import { useIssuesStore } from '@/stores/issues.store';
import { storeToRefs } from 'pinia';

import IssueCard from './issue-card.component.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useIssuesStore();

const { issues } = storeToRefs(store);

const handleOpenDetail = (id) => {
  router.push({
    name: 'issue-detail',
    params: { id },
  });
};
</script>

<style lang="scss" scoped>
.issue-list {
  @include flex(column);
  gap: space(2.5);

  max-width: rem(190);
  max-height: rem(530);

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    width: 100%;
    cursor: pointer;
  }
}
</style>
