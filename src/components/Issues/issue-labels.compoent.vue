<template>
  <ul class="issue-labels">
    <li v-for="label in issueLabels" class="issue-labels__label">
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
});
</script>

<style lang="scss" scoped>
.issue-labels {
  @include flex($wrap: wrap);
  gap: space(1);

  font-size: rem(10);
  font-weight: 500;

  &__label {
    padding: space(0.5) space(1.5);

    border-radius: $radius-sm;
    background-color: $neutral-surface;
  }
}
</style>
