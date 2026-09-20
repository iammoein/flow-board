<template>
  <div class="tag-input">
    <ul class="tag-input__pills">
      <li v-for="(tag, index) in tags" :key="index" class="tag-input__pill">
        <span>{{ tag }}</span>
        <CloseButton
          type="button"
          :icon-size="10"
          @close="handleRemoveTag(index)"
        />
      </li>
    </ul>
    <BaseInput
      v-model="inputValue"
      class="tag-input__field"
      placeholder="Add label..."
      @keydown="handleKeydown"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

import BaseInput from '../base/base-input.component.vue';
import CloseButton from './close-button.component.vue';

const tags = defineModel({
  type: Array,
  default: () => [],
});

const inputValue = ref('');

const handleKeydown = (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addTag();
  }
};

const addTag = () => {
  const word = inputValue.value.trim();
  if (!word) return;

  tags.value.push(word);
  inputValue.value = '';
};

const handleRemoveTag = (index) => {
  tags.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
.tag-input {
  &__pills {
    @include flex($wrap: wrap);
    gap: space(1.5);

    height: rem(35);
    margin-bottom: rem(5);

    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__pill {
    @include flex($align: center);
    gap: space(1);

    width: fit-content;
    height: rem(21);
    padding: space(1) space(2);

    background-color: $primary-container;
    border-radius: $radius-sm;
    color: $primary;

    font-size: rem(11);
  }

  &__remove-button {
    width: rem(10);
    height: rem(10);
  }
}
</style>
