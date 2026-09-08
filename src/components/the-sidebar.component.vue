<template>
  <aside class="sidebar">
    <div class="sidebar__logo">
      <BaseIcon :icon="LogoIcon" :size="28" class="sidebar__logo-icon" />
      <h6>Flow Board</h6>
    </div>

    <BaseDropdown :options="themes" />

    <nav class="sidebar__nav">
      <ul class="sidebar__nav-list">
        <li
          class="sidebar__nav-item"
          v-for="item in NAV_ITEMS"
          :key="item.name"
        >
          <router-link
            class="sidebar__nav-link"
            :to="{ name: item.name }"
            active-class="sidebar__nav-link--active"
          >
            <BaseIcon class="sidebar__nav-icon" :icon="item.icon" :size="16" />
            <span class="sidebar__nav-label">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import { NAV_ITEMS } from "@/constants/routes.contant.js";

import BaseIcon from "./base/base-icon.component.vue";
import BaseDropdown from "./base/‌base-dropdown.component.vue";

import LogoIcon from "./icons/logo.icon.vue";

const themes = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "System",
    value: "system",
  },
];
</script>

<style lang="scss" scoped>
.sidebar {
  @include flex(column);
  gap: space(8);

  min-height: 100vh;
  width: rem(200);
  padding: rem(24) rem(16);

  background-color: $white;
  border-right: 1px solid $neutral-outline;

  &__logo {
    @include flex($align: center);
    gap: space(2);
  }

  &__logo-icon {
    color: $primary;
  }

  &__nav-list {
    @include flex(column);
    gap: space(1);
  }

  &__nav-link {
    @include flex($align: center);
    gap: space(2);

    padding: space(2) space(3);

    background-color: transparent;

    text-decoration: none;

    transition:
      background-color 300ms ease,
      color 300ms ease-in;

    &--active {
      background-color: $primary-container;
      border-radius: space(2);

      .sidebar__nav-icon {
        color: $primary;
      }

      .sidebar__nav-label {
        color: $primary;
      }
    }
  }

  &__nav-icon {
    color: $neutral-on-surface-variant;
  }

  &__nav-label {
    color: $neutral-on-surface;

    font-size: rem(13);
  }
}
</style>
