<template>
  <div class="base-checkbox">
    <label class="base-checkbox__control">
      <input
        v-model="model"
        type="checkbox"
        v-bind="$attrs"
        class="base-checkbox__field"
      />
      <span class="base-checkbox__mark"></span>
    </label>

    <span class="base-checkbox__label">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});

const model = defineModel();
</script>

<style lang="scss" scoped>
.base-checkbox {
  $transition-fast: 150ms ease;

  @include flex;
  gap: space(2);

  &__control {
    @include flex($justify: center, $align: center);

    width: rem(18);
    height: rem(18);

    color: $primary;
    border: 1px solid $primary;
    border-radius: $radius-sm;

    cursor: pointer;
    transition:
      background-color $transition-fast,
      border-color $transition-fast;
  }

  &__field {
    appearance: none;
    margin: 0;

    &:checked ~ .base-checkbox__mark {
      background: transparent;

      &:before {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  &__mark {
    @include flex($justify: center, $align: center);

    width: rem(12);
    height: rem(12);

    &:before {
      content: "✓";
      font-weight: bold;
      opacity: 0;
      transform: scale(0.5);

      transition:
        opacity 300ms ease,
        transform 300ms ease;
    }
  }

  &:has(.base-checkbox__field:checked) {
    .base-checkbox__label {
      color: $neutral-on-surface-variant;

      transition: color $transition-fast;
    }
  }
}
</style>
