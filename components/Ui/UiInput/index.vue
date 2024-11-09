<script setup lang="ts">
import { ref } from "vue";

const { isValid } = defineProps<{
  label?: string;
  isValid?: boolean;
}>();

const attrs = useAttrs();

const modelValue = defineModel();

const inputRef = useTemplateRef<HTMLInputElement>("input");

const isInputDirty = ref(false);

const showError = computed(() => !isValid && !!modelValue.value);

const isInputFocused = computed(() => !!modelValue.value || isInputDirty.value);
</script>

<template>
  <div class="custom-input">
    <label
      @click="inputRef?.focus()"
      :class="[
        'custom-input__label',
        { 'custom-input__label--active': isInputFocused },
      ]"
    >
      {{ label }}
    </label>
    <input
      :class="[
        'custom-input__input',
        { 'custom-input__input--error': showError },
      ]"
      ref="input"
      v-model="modelValue"
      v-bind="{ ...attrs }"
      @focus="isInputDirty = true"
      @blur="isInputDirty = false"
    />

    <template v-if="!!showError">
      <slot name="errorMessage" />
    </template>
  </div>
</template>

<style scoped lang="scss">
$border-error-color: #ff5a5a;

.custom-input {
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &__input {
    width: 100%;
    height: 48px;

    border-radius: $primary-border-radius;
    border: 1px solid #ffffff1a;
    padding-inline: 12px;
    padding-block: 22px 10px;

    font-size: 16px;
    outline: none;

    color: $text-primary-color;
    background: #00000033;

    &--error {
      border-color: $border-error-color;
    }
  }

  &__label {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease;
    opacity: 80%;

    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    text-transform: uppercase;

    &--active {
      top: 14px;

      font-size: 10px;
      font-weight: 400;
      line-height: 10px;
    }
  }
}
</style>
