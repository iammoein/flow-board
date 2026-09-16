<template>
  <span class="issue-number">#{{ issueNumber }}</span>
</template>

<script setup>
defineProps({
  issueNumber: {
    type: Number,
    default: 100,
  },
});
</script>

<style lang="scss" scoped>
.issue-number {
  color: $gray-400;

  font-size: rem(11);
  font-weight: 600;
}
</style>
