<template>
  <teleport :to="teleportTo" defer>
    <transition name="modal" appear @after-leave="leaveModal">
      <div
        v-if="model"
        class="base-modal"
        :class="`base-modal--${placement}`"
        role="dialog"
        aria-modal="true"
      >
        <button class="base-modal__overlay" @click="handleCloseModal" />

        <div class="base-modal__card" v-bind="$attrs">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue';

const model = defineModel({
  type: Boolean,
  default: true,
});

const props = defineProps({
  placement: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'right', 'left'].includes(value),
  },
  teleportTo: {
    type: String,
    default: 'body',
  },
  closeOnEsc: {
    type: Boolean,
    default: true,
  },
});

defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits(['leave']);

const handleCloseModal = () => {
  model.value = false;
};

const handleKeydown = (e) => {
  if (props.closeOnEsc && e.key === 'Escape') {
    handleCloseModal();
  }
};

const leaveModal = () => {
  emit('leave');
};

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

watch(
  model,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.base-modal {
  @include flex($align: center, $justify: center);

  position: absolute;
  inset: 0;
  z-index: 1000;

  &--right,
  &--left {
    align-items: stretch;
  }

  &--right {
    justify-content: flex-end;
  }

  &--left {
    justify-content: flex-start;
  }

  &__overlay {
    @include button-reset;

    position: absolute;
    inset: 0;

    background-color: $black;
    opacity: 40%;
  }

  &__card {
    position: relative;
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
}

.base-modal--center.modal-enter-from .base-modal__card,
.base-modal--center.modal-leave-to .base-modal__card {
  transform: scale(0.95);
}

.base-modal--right.modal-enter-from .base-modal__card,
.base-modal--right.modal-leave-to .base-modal__card {
  transform: translateX(100%);
}

.base-modal--left.modal-enter-from .base-modal__card,
.base-modal--left.modal-leave-to .base-modal__card {
  transform: translateX(-100%);
}
</style>
