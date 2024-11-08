<script setup lang="ts">
import { alertIconMap } from "./consts/alert-icon-map";
import type { AlertType } from "./types/alert-type.type";

const { type } = defineProps<{
  type: AlertType;
}>();

const alertIcon = computed(() => alertIconMap[type]);
</script>

<template>
  <article class="alert">
    <component
      :class="['alert__icon', `alert__icon--${type}`]"
      :is="alertIcon"
    />

    <p :class="['alert__content', `alert__content--${type}`]">
      <slot />
    </p>
  </article>
</template>

<style scoped lang="scss">
.alert {
  display: flex;
  align-items: flex-start;
  gap: 8px;

  background: #ffffff1a;
  padding: 12px;
  border-radius: 4px;

  &__content {
    @include font-roboto;
    font-size: 14px;
    line-height: 16.41px;

    &--warning {
      color: #ffb287;
    }
  }

  &__icon {
    width: 50px;
    height: 20px;

    &--warning {
      color: #ffb287;
    }
  }
}
</style>
