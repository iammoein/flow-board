<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "danger", "outline", "none"].includes(value),
  },
  size: {
    type: String,
    default: "large",
    validator: (value) => ["large", "small"].includes(value),
  },
});

const buttonClasses = {
  button: true,
  [`button--${props.variant}`]: props.variant,
  [`button--${props.size}`]: props.size,
};
</script>

<style lang="scss" scoped>
.button {
  @include button-reset();

  border-radius: $radius-md;

  transition:
    background-color 200ms ease-out,
    color 200ms ease-out;

  font-weight: 400;

  &--large {
    padding: space(2) space(4);

    font-size: rem(13);
  }

  &--small {
    padding: space(1.5) space(3);

    font-size: rem(12);
  }

  &--primary {
    color: $white;
    background-color: $primary;

    font-weight: 500;

    &:hover {
      background-color: $on-primary-container;
    }
  }

  &--danger {
    color: $red-container;
    background-color: $red-on-container;
    background-color: $hue-1;

    font-weight: 700;

    &:hover {
      background-color: $red-on-container;
    }
  }

  &--outline {
    color: $neutral-on-surface;
    background-color: $white;
    border: 1px solid $neutral-outline;

    &:hover {
      background-color: $neutral-outline-variant;
    }
  }

  &--none {
    color: $gray-500;
    border: none;

    font-weight: 600;

    &:hover {
      color: $gray-600;
      background-color: transparent;
    }
  }
}
</style>
