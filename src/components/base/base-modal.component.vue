<template>
  <div v-if="model" class="base-modal">
    <div class="base-modal__overlay" @click="handleCloseModal"></div>

    <div class="base-modal__content">
      <div class="base-modal__card" v-bind="$attrs">
        <slot />
      </div>
    </div>
  </div>
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
    z-index: 1000;
  }
}
</style>
