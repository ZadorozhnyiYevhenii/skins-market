<script setup lang="ts">
import type { ButtonColor } from "./types/button-color.type";
import type { ButtonSize } from "./types/button-size.type";

const buttonClass = "button";
const nuxtRouterTag = "nuxt-link";
const linkTag = "a";
const buttonTag = "button";

const props = withDefaults(
  defineProps<{
    size?: ButtonSize;
    isDisabled?: boolean;
    color?: ButtonColor;
  }>(),
  {
    size: "md",
    color: "primary",
  }
);

const attrs = useAttrs();

const component = computed(() => {
  if (attrs.to) {
    return nuxtRouterTag;
  }

  if (attrs.href) {
    return linkTag;
  }

  return buttonTag;
});

const buttonClasses = computed(() => ({
  [buttonClass]: true,
  [`${buttonClass}--is-disabled`]: props.isDisabled,
  [`${buttonClass}--size-${props.size}`]: props.size,
  [`${buttonClass}--color-${props.color}`]: props.color,
}));

const buttonProps = computed(() => {
  const { to, href } = attrs;

  switch (component.value) {
    case nuxtRouterTag:
      return { to };
    case linkTag:
      return {
        href,
        rel: "noreferrer noopener",
        target: "_blank",
      };
    default:
      return {
        disabled: props.isDisabled,
      };
  }
});
</script>

<template>
  <Component
    :is="component"
    v-if="component"
    :class="buttonClasses"
    v-bind="{ ...buttonProps, ...attrs }"
  >
    <slot name="prepend-icon" />

    <slot />

    <slot name="append-icon" />
  </Component>
</template>

<style scoped lang="scss">
$primary-color: #2c64f1;
$primary-color-hover: #2e58c3;
$secondary-color: $text-primary-color;

.button {
  color: $text-primary-color;
  border-radius: $primary-border-radius;
  box-shadow: 0px 4px 4px 0px #00000033;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  text-transform: uppercase;

  transition: all 0.3s ease;

  &--size-md {
    height: 38px;
  }

  &--size-lg {
    height: 64px;
  }

  &--color-primary {
    background: $primary-color;

    &:hover {
      background: $primary-color-hover;
    }
  }

  &--color-transparent {
    background: transparent;
    box-shadow: none;

    opacity: 60%;

    &:hover {
      opacity: 100%;
    }
  }

  &--color-secondary {
    background: $secondary-color;
  }

  &--is-disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
