<template>
  <div class="issue-detail">
    <div class="issue-detail__header">
      <IssueNumber :issue-number="issueNumber" />
      <CloseButton />
    </div>

    <h3 class="issue-detail__title">{{ issueTitle }}</h3>

    <IssueLabels
      :issue-labels="issueLabels"
      class="issue-detail__labels"
      label-size="md"
    />

    <TheDivider />

    <div class="issue-detail__section">
      <h4 class="issue-detail__sub-title">Description</h4>
      <p class="issue-detail__description">
        {{ issueDescription }}
      </p>
    </div>

    <TheDivider />
  </div>
</template>

<script setup>
import CloseButton from "../shared/close-button.component.vue";
import TheDivider from "../shared/the-divider.component.vue";
import IssueLabels from "./issue-labels.compoent.vue";
import IssueNumber from "./issue-number.component.vue";

defineProps({
  issueNumber: {
    type: Number,
    defult: 100,
  },
  issueTitle: {
    type: String,
    default: "issue",
  },
  issueLabels: {
    type: Array,
    default: () => ["label", "label"],
  },
  issueDescription: {
    type: String,
    default: "Description",
  },
});
</script>

<style scoped lang="scss">
.issue-detail {
  @include flex(column);
  gap: space(5);

  width: rem(440);
  height: 100vh;
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
