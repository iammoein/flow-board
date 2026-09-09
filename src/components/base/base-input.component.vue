<template>
  <div class="base-input">
    <label v-if="hasLabel" :for="id" class="base-input__label">{{ label }}</label>
    <input
      v-if="!hasTextarea"
      :placeholder="placeholder"
      v-model="model"
      :id="id"
      type="text"
      class="base-input__field"
    />
    <textarea
      v-else
      v-model="model"
      :id="id"
      :placeholder="placeholder"
      class="base-input__field base-input__field--textarea"
    ></textarea>
  </div>
</template>

<script setup>
const model = defineModel({
  type: String,
  default: "",
});

defineProps({
  hasLabel: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "title",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    required: true,
  },
  hasTextarea: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.base-input {
  @include flex(column);
  gap: space(1.5);

  &__label {
    width: 100%;

    color: $neutral-on-surface-variant;

    font-size: rem(13);
  }

  &__field {
    display: block;

    width: 100%;
    min-height: rem(32);
    padding: space(3) space(2);

    background-color: transparent;
    border: 1px solid $neutral-outline;
    outline: none;
    border-radius: $radius-md;
    color: $neutral-on-surface;

    &::placeholder {
      color: $neutral-on-surface-variant;

      font-size: rem(13);
    }

    &--textarea {
      min-height: rem(80);
      padding: space(3);

      resize: none;
    }
  }
}
</style>
