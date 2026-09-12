<template>
  <Transition name="error">
    <span v-if="message" class="base-error">
      {{ message }}
    </span>
  </Transition>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    defautl: "",
  },
});
</script>

<style lang="scss" scoped>
.base-error {
  display: block;

  font-size: rem(12);

  color: $error;
}

.error-enter-active,
.error-leave-active {
  transition: all 0.2s ease;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
