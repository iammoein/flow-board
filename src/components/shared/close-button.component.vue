<template>
  <base-button variant="none" class="close-button" @click="onClose">
    <BaseIcon :icon="CloseIcon" :size="iconSize" class="close-button__icon" />
  </base-button>
</template>

<script setup>
import BaseIcon from "../base/base-icon.component.vue";
import BaseButton from "../base/base-button.component.vue";

import CloseIcon from "../icons/close.icon.vue";

defineProps({
  iconSize: {
    type: Number,
    default: 16,
  },
});

const emit = defineEmits(["close"]);

const onClose = () => {
  emit("close");
};
</script>

<style scoped lang="scss">
.close-button {
  @include button-reset;

  &__icon {
    color: $neutral-on-surface-variant;

    transition: color 300ms ease;

    &:hover {
      color: $neutral-on-surface;
    }
  }
}
</style>
