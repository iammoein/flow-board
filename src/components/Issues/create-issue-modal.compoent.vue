<template>
  <BaseModal v-model="isCreateIssuesModal" class="issue">
    <div class="issue__header">
      <h3 class="issue__title">{{ modalTitle }}</h3>
      <button class="issue__close-button" @click="handleCloseModal">
        <BaseIcon :icon="CloseIcon" :size="16" class="issue__header-icon" />
      </button>
    </div>
    <TheDivider class="issue__divider" />

    <form @submit.prevent="handleSubmit" class="issue__form">
      <BaseInput
        label="Title"
        placeholder="Add a title for your issue..."
        id="issue-title"
      />
      <BaseInput
        as="textarea"
        label="Description"
        id="issue-description"
        placeholder="Add a description or outline technical notes..."
      />

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
  </BaseModal>
</template>

<script setup>
import { ref } from "vue";
import { useIssuesStore } from "@/stores/issues.store.js";

import BaseInput from "../base/base-input.component.vue";
import BaseModal from "../base/base-modal.component.vue";
import BaseDropdown from "../base/‌base-dropdown.component.vue";
import BaseIcon from "../base/base-icon.component.vue";
import BaseButton from "../base/base-button.component.vue";
import TheDivider from "../shared/the-divider.component.vue";

import CloseIcon from "../icons/close.icon.vue";
import { storeToRefs } from "pinia";

defineProps({
  modalTitle: {
    type: String,
    defualt: "Create Issue",
  },
  teleportTo: {
    type: String,
    default: "body",
  },
});

const title = ref("");
const description = ref("");

const store = useIssuesStore();

const { isCreateIssuesModal } = storeToRefs(store);

const handleCloseModal = () => {
  isCreateIssuesModal.value = false;
};

const handleSubmit = () => {
  console.log('form');
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
