<template>
  <ul class="issue-labels">
    <li
      v-for="label in issueLabels"
      class="issue-labels__label"
      :class="`issue-labels__label--${labelSize}`"
    >
      {{ label }}
    </li>
  </ul>
</template>

<script setup>
defineProps({
  issueLabels: {
    type: Array,
    defult: () => [],
  },
  labelSize: {
    type: String,
    default: "sm",
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
});
</script>

<style lang="scss" scoped>
.issue-labels {
  @include flex($wrap: wrap);
  gap: space(1);

  font-weight: 500;

  &__label {
    border-radius: $radius-sm;
    background-color: $neutral-surface;

    &--sm {
      padding: space(0.5) space(1.5);

      font-size: rem(10);
    }

    &--md {
      padding: space(1) space(2);

      font-size: rem(11);
      font-weight: 600;
    }

    &--lg {
      padding: space(1.5) space(2.5);
    }
  }
}
</style>
