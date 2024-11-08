<script setup lang="ts">
import type { SelectInputOption } from "./types/options.interface";
import type { SelectSize } from "./types/select-size.type";

const { defaultLabel, options } = defineProps<{
  options: SelectInputOption[];
  size: SelectSize;
  defaultLabel?: string;
  upperCase?: boolean;
}>();

const attrs = useAttrs();

const isOpen = ref(false);

const selectedOption = defineModel();

const selectedLabel = computed(() => {
  const option = options.find(
    (option) => option.value === selectedOption.value
  );

  return option ? option.label : defaultLabel;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (optionValue: string) => {
  selectedOption.value = optionValue;
  isOpen.value = false;
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

const handleClickOutside = (event: Event) => {
  if (!(event.target as HTMLElement).closest(".custom-select")) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div
    :class="[
      'custom-select',
      `custom-select--${size}`,
      { 'custom-select--upper-case': upperCase },
    ]"
    :aria-expanded="isOpen"
    role="combobox"
  >
    <button
      type="button"
      :class="[
        'custom-select__button',
        `custom-select__button--${size}`,
        { 'custom-select__button--upper-case': upperCase },
        { 'custom-select__button--active': isOpen },
      ]"
      @click="toggleDropdown"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :aria-controls="'custom-select-list'"
      :aria-labelledby="'custom-select-label'"
      v-bind="{ ...attrs }"
    >
      <span>
        <slot name="prepend-icon" />

        {{ selectedLabel }}

        <slot name="append-icon" />
      </span>

      <SvgoExpandIcon
        v-if="isOpen"
        class="custom-select__toggle-icon"
        alt="Expand icon"
      />

      <SvgoCollapseIcon
        v-else
        class="custom-select__toggle-icon"
        alt="Collapse icon"
      />
    </button>

    <ul
      v-if="isOpen"
      role="listbox"
      id="custom-select-list"
      :class="['custom-select__options', `custom-select__options--${size}`]"
      aria-labelledby="custom-select-label"
    >
      <li
        v-for="option in options"
        :key="option.value"
        role="option"
        tabindex="0"
        @click.stop="selectOption(option.value)"
        @keydown.enter.prevent="selectOption(option.value)"
        :aria-selected="selectedOption === option.value"
        class="custom-select__option"
      >
        <template v-if="option.icon">
          <Component :is="option.icon" />
        </template>

        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
$color-border: #ffffff33;
$color-option-hover-background: #ffffff12;
$color-option-hover-text: #b3c8ff;

$spacing-small: 7px;
$spacing-medium: 12px;
$spacing-large: 16px;
$spacing-button-padding: $spacing-large $spacing-medium $spacing-large;

$font-size-button: 14px;

$dropdown-max-height: 150px;
$toggle-icon-size: 12px;

.custom-select {
  position: relative;

  &--sm {
    background: none;
  }

  &--md {
    width: 240px;
  }

  &--upper-case {
    text-transform: uppercase;
  }

  &__button {
    font-size: $font-size-button;
    text-align: left;
    color: $text-primary-color;

    border: 1px solid $color-border;
    border-radius: $primary-border-radius;

    background: $primary-background-color;
    padding: $spacing-button-padding;

    display: flex;
    align-items: center;

    cursor: pointer;

    &:focus {
      outline: none;
    }

    &--active {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &--upper-case {
      text-transform: uppercase;
    }

    &--sm {
      background: none;
      border: none;

      padding: 8px 10px 8px 8px;
      width: fit-content;

      gap: 4px;
    }

    &--md {
      justify-content: space-between;
    }
  }

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;

    max-height: $dropdown-max-height;
    padding-block: $spacing-medium;

    overflow-y: auto;
    z-index: 2;

    background: $primary-background-color;
    border: 1px solid $color-border;
    border-top: none;
    border-bottom-left-radius: $primary-border-radius;
    border-bottom-right-radius: $primary-border-radius;

    &--sm {
      border-radius: $primary-border-radius;
      border: 1px solid $color-border;
    }
  }

  &__option {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: $font-size-button;

    padding: $spacing-small $spacing-medium;

    cursor: pointer;

    &:hover {
      background: $color-option-hover-background;
      color: $color-option-hover-text;
    }
  }

  &__toggle-icon {
    width: $toggle-icon-size;
    height: $toggle-icon-size;
  }
}
</style>
