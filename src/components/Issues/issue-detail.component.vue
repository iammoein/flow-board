<template>
  <base-modal
    v-model="isOpen"
    placement="right"
    teleport-to="#app-main"
    @leave="handleAftreLeave"
  >
    <div class="issue-detail">
      <div class="issue-detail__header">
        <IssueNumber :issue-number="issue.number" />
        <CloseButton @close="handleCloseDetail" />
      </div>

      <h3 class="issue-detail__title">{{ issue.title }}</h3>

      <IssueLabels
        :issue-labels="issue.tags"
        class="issue-detail__labels"
        label-size="md"
      />

      <TheDivider />

      <div class="issue-detail__section">
        <h4 class="issue-detail__sub-title">Description</h4>
        <p class="issue-detail__description">
          {{ issue.description }}
        </p>
      </div>

      <TheDivider />
    </div>
  </base-modal>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ROUTE_NAMES } from '@/constants/routes.contant.js';

import CloseButton from '../shared/close-button.component.vue';
import TheDivider from '../shared/the-divider.component.vue';
import IssueLabels from './issue-labels.compoent.vue';
import IssueNumber from './issue-number.component.vue';
import BaseModal from '../base/base-modal.component.vue';

const props = defineProps({
  issue: {
    type: Object,
    default: () => {},
  },
});

console.log(props.issue, 'issues');

watch(
  () => props.issue,
  (val) => {
    console.log(val, 'issues');
  },
);

const isOpen = ref(true);
const router = useRouter();

const handleCloseDetail = () => {
  isOpen.value = false;
};

const handleAftreLeave = () => {
  router.push({
    name: ROUTE_NAMES.ISSUES,
  });
};
</script>

<style scoped lang="scss">
.issue-detail {
  @include flex(column);
  gap: space(5);

  width: rem(440);
  height: 100%;
  padding: space(5);

  background-color: $white;

  &__header {
    @include flex($justify: space-between);

    width: 100%;
  }

  &__section {
    @include flex(column);
    gap: space(2);
  }

  &__title {
    font-size: rem(18);
    font-weight: bold;
  }

  &__sub-title {
    color: $neutral-on-surface-variant;

    font-size: rem(11);
    font-weight: 600;
    text-transform: uppercase;
  }

  &__description {
    color: $neutral-on-surface;

    font-size: rem(13);
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
