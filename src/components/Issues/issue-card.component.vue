<template>
  <div class="issue-card">
    <div class="issue-card__header">
      <IssueNumber :issue-number="issueNumber" />
      <p class="issue-card__avatar">avatar</p>
    </div>

    <h4 class="issue-card__title">{{ issueTitle }}</h4>

    <IssueLabels :issue-labels="issueLabels" />

    <div class="issue-card__footer">
      <div class="issue-card__icons">ui</div>
      <p>{{ issueDate }}</p>
    </div>
  </div>
</template>

<script setup>
import IssueLabels from './issue-labels.compoent.vue';
import IssueNumber from './issue-number.component.vue';

defineProps({
  issueNumber: {
    type: Number,
    default: 100,
  },
  issueTitle: {
    type: String,
    default: "Title",
  },
  issueLabels: {
    type: Array,
    default: () => ["label", "label"],
  },
  issueDate: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.issue-card {
  @include flex(column);
  gap: space(3);

  width: rem(190);
  min-height: rem(130);
  height: auto;
  padding: space(3);

  background-color: $white;
  border-radius: $radius-md;
  border: 1px solid $neutral-outline;

  &__header {
    @include flex($justify: space-between);

    width: 100%;
    min-height: rem(20);

    color: $gray-400;

    font-size: rem(11);
  }

  &__number {
    font-weight: 600;
  }

  &__title {
    color: $neutral-on-surface;

    font-size: rem(13);
  }

  &__footer {
    @include flex($justify: space-between);

    padding-top: space(2);

    border-top: 1px solid $neutral-outline;
    color: $gray-400;

    font-size: rem(10);
  }
}
</style>
