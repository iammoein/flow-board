<template>
  <transition name="modal">
    <div v-if="model" class="base-modal">
      <button class="base-modal__overlay" @click="handleCloseModal"></button>

      <div class="base-modal__content">
        <div class="base-modal__card" v-bind="$attrs">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const model = defineModel({
  type: Boolean,
  default: true,
});

defineProps({
  teleportTo: {
    type: String,
    default: "body",
  },
});

defineOptions({
  inheritAttrs: false,
});

const handleCloseModal = () => {
  model.value = false;
};
</script>

<style lang="scss" scoped>
.base-modal {
  @include flex($align: center, $justify: center);

  position: absolute;
  inset: 0;

  width: 100%;

  &__overlay {
    @include button-reset;

    position: absolute;
    inset: 0;

    background-color: $black;
    opacity: 40%;
  }

  &__content {
    @include flex($align: center, $justify: center);
    position: absolute;
    inset: 0;

    width: 100%;

    pointer-events: none;
    z-index: 1000;
  }

  &__card {
    pointer-events: auto;
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 200ms ease;

  .base-modal__card {
    transition: transform 200ms ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .base-modal__card {
    transform: scale(0.95);
  }
}
</style>
