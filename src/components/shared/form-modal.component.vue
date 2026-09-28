<template>
  <base-modal v-model="model" teleport-to="#app-body">
    <div class="form-modal">
      <div class="form-modal__header">
        <h3 class="form-modal__title">{{ title }}</h3>
        <CloseButton class="form-modal__close-button" @close="$emit('close')" />
      </div>
      <TheDivider class="form-modal__divider" />
      <form class="form-modal__form" @submit.prevent="$emit('submit')">
        <slot />

        <TheDivider />

        <div class="form-modal__submit">
          <base-button type="button" variant="outline" @click="$emit('close')">
            Cancel
          </base-button>
          <base-button type="submit">{{ submitLabel }}</base-button>
        </div>
      </form>
    </div>
  </base-modal>
</template>

<script setup>
import BaseModal from '@/components/base/base-modal.component.vue';
import BaseButton from '@/components/base/base-button.component.vue';
import CloseButton from '@/components/shared/close-button.component.vue';
import TheDivider from '@/components/shared/the-divider.component.vue';

const model = defineModel({ type: Boolean, default: false });

defineProps({
  title: { type: String, required: true },
  submitLabel: { type: String, default: 'Submit' },
});

defineEmits(['close', 'submit']);
</script>

<style lang="scss" scoped>
/* همان استایل‌های .issue، فقط با prefix جدید form-modal */
.form-modal {
  max-height: rem(580);
  width: rem(600);
  max-width: 100%;
  padding: space(6);
  border-radius: $radius-lg;
  background-color: $white;
  overflow: auto;

  &__header {
    @include flex($justify: space-between, $align: center);
  }

  &__title {
    font-size: rem(16);
    font-weight: bold;
  }

  &__close-button {
    @include button-reset;
  }

  &__divider {
    margin-block: space(5);
  }

  &__form {
    @include flex(column);
    gap: space(4);
  }

  &__submit {
    @include flex;
    gap: space(3);
    align-self: flex-end;
  }
}
</style>
