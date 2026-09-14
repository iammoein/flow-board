<template>
  <div class="issue-card">
    <div class="issue-card__header">
      <IssueNumber :issue-number="issueNumber" />
      <p class="issue-card__avatar">avatar</p>
    </div>

    <h4 class="issue-card__title">{{ issueTitle }}</h4>

    <ul class="issue-card__labels">
      <li v-for="label in issueLabels" class="issue-card__label">
        {{ label }}
      </li>
    </ul>

    <div class="issue-card__footer">
      <div class="issue-card__icons">ui</div>
      <p>{{ issueDate }}</p>
    </div>
  </div>
</template>

<script setup>
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

  &__labels {
    @include flex($wrap: wrap);
    gap: space(1);

    font-size: rem(10);
    font-weight: 500;
  }

  &__label {
    padding: space(0.5) space(1.5);

    border-radius: $radius-sm;
    background-color: $neutral-surface;
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
