<template>
  <div class="base-input">
    <label v-if="label" :for="inputId" class="base-input__label">{{
      label
    }}</label>
    <component
      v-model="model"
      v-bind="$attrs"
      :is="as"
      :id="inputId"
      :type="type"
      :placeholder="placeholder"
      :class="`base-input__field--${as}`"
      class="base-input__field"
    />
  </div>
</template>

<script setup>
import { computed, useId } from "vue";

const model = defineModel({
  type: String,
  default: "",
});

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: null,
  },
  as: {
    type: String,
    default: "input",
    validator: (value) => ["input", "textarea"].includes(value),
  },

  type: {
    type: String,
    default: "text",
  },
});

defineOptions({
  inheritAttrs: false,
});

const uid = useId();
const inputId = computed(() => props.id ?? uid);
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
