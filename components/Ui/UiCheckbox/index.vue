<script setup lang="ts">
import CheckedIcon from "~/assets/icons/checked-icon.svg";

const modelValue = defineModel<boolean>();
</script>

<template>
  <label
    :class="['ui-checkbox', { 'ui-checkbox--checked': modelValue }]"
    role="checkbox"
    :aria-checked="modelValue"
  >
    <CheckedIcon v-if="modelValue" />

    <slot />
  </label>
</template>

<style scoped lang="scss">
.ui-checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid #ffffff33;
  border-radius: $primary-border-radius;

  display: flex;
  justify-content: center;
  align-items: center;

  &--checked {
    border-color: $secondary-text-color;
  }
}
</style>
