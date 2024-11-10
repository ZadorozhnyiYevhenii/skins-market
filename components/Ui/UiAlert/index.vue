<script setup lang="ts">
import { alertIconMap } from "./consts/alert-icon-map";
import type { AlertType } from "./types/alert-type.type";

const { type } = defineProps<{
  type: AlertType;
}>();

const alertIcon = computed(() => alertIconMap[type]);

const alertClasses = computed(() => ["alert", `alert--${type}`]);

const alertIconClasses = computed(() => [
  "alert__icon",
  `alert__icon--${type}`,
]);

const alertContentClasses = computed(() => [
  "alert__content",
  `alert__content--${type}`,
]);
</script>

<template>
  <article :class="alertClasses">
    <component v-if="alertIcon" :class="alertIconClasses" :is="alertIcon" />

    <p :class="alertContentClasses">
      <slot />
    </p>
  </article>
</template>

<style scoped lang="scss">
$warning-color: #ffb287;
$warning-background-color: #ffffff1a;
$error-background-color: #ff5a5a;

.alert {
  display: flex;
  align-items: flex-start;
  gap: 8px;

  padding: 12px;
  border-radius: $primary-border-radius;

  &--warning {
    background: $warning-background-color;
  }

  &--error {
    background: $error-background-color;
  }

  &__content {
    @include font-roboto;
    @include text-regular;

    &--warning {
      color: $warning-color;
    }

    &--error {
      color: $text-primary-color;
    }
  }

  &__icon {
    width: 50px;
    height: 20px;

    &--warning {
      color: $warning-color;
    }
  }
}
</style>
