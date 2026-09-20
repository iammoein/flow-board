<template>
  <base-modal
    v-model="isCreateIssuesModal"
    teleport-to="#app-body"
    class="issue"
  >
    <div class="issue__header">
      <h3 class="issue__title">{{ modalTitle }}</h3>
      <CloseButton class="issue__close-button" @close="handleCloseModal" />
    </div>
    <TheDivider class="issue__divider" />

    <form class="issue__form" @submit.prevent="handleSubmit">
      <div>
        <BaseInput
          id="issue-title"
          v-model="formData.title"
          label="Title"
          placeholder="Add a title for your issue..."
        />
        <BaseError :message="error?.title?.[0]" />
      </div>
      <div>
        <BaseInput
          id="issue-description"
          v-model="formData.description"
          as="textarea"
          label="Description"
          placeholder="Add a description or outline technical notes..."
        />
        <BaseError :message="error?.description?.[0]" />
      </div>

      <div class="issue__form-group">
        <BaseDropdown label="Project" />
        <BaseDropdown label="Status" />
        <BaseDropdown label="Priority" />
      </div>

      <div class="issue__form-group">
        <BaseDropdown label="Assignee" />
        <BaseDropdown label="Milestone" />
        <BaseDropdown label="Due Date" />
      </div>

      <TheDivider />
      <div class="issue__form-submit">
        <base-button type="button" variant="outline" @click="handleCloseModal"
          >Cancel</base-button
        >
        <base-button type="submit">Create Issue</base-button>
      </div>
    </form>
  </base-modal>
</template>

<script setup>
import z from 'zod';
import { reactive, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useIssuesStore } from '@/stores/issues.store.js';
import { issuesSchema } from '@/schemas/issues.schema.js';

import BaseInput from '../base/base-input.component.vue';
import BaseModal from '../base/base-modal.component.vue';
import BaseDropdown from '../base/‌base-dropdown.component.vue';
import BaseButton from '../base/base-button.component.vue';
import BaseError from '../base/base-error.component.vue';
import TheDivider from '../shared/the-divider.component.vue';

import CloseButton from '../shared/close-button.component.vue';

defineProps({
  modalTitle: {
    type: String,
    defualt: 'Create Issue',
  },
});

const formData = reactive({
  title: '',
  description: '',
});

const error = ref({});

const store = useIssuesStore();

const { isCreateIssuesModal } = storeToRefs(store);

const handleCloseModal = () => {
  isCreateIssuesModal.value = false;

  error.value = {};
  resetForm();
};

const handleSubmit = () => {
  const result = issuesSchema.safeParse(formData);

  if (!result.success) {
    error.value = z.flattenError(result.error).fieldErrors;
    return;
  }

  store.createIssue(result.data);

  handleCloseModal();
};

const resetForm = () => {
  Object.assign(formData, {
    title: '',
    description: '',
  });
};
</script>

<style lang="scss">
.issue {
  width: rem(600);
  padding: space(6);

  border-radius: $radius-lg;
  background-color: $white;

  &__header {
    @include flex($justify: space-between, $align: center);
  }

  &__title {
    font-size: rem(16);
    font-size: bold;
  }

  &__close-button {
    @include button-reset;
  }

  &__header-icon {
    color: $neutral-on-surface-variant;

    transition: color 300ms ease;

    &:hover {
      color: $neutral-on-surface;
    }
  }

  &__divider {
    margin-block: space(5);
  }

  &__form {
    @include flex(column);
    gap: space(4);
  }

  &__form-group {
    @include flex();
    gap: space(3);
  }

  &__dropdown {
    background-color: red;
  }

  &__form-submit {
    @include flex;
    gap: space(3);

    align-self: flex-end;
  }
}
</style>
