<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";

const { selectedSkins, skin } = defineProps<{
  skin: Skin;
  selectedSkins: Skin[];
}>();

const isSelected = computed(() => isSkinSelected(selectedSkins, skin));
</script>

<template>
  <article class="skin-card" :class="{ active: isSelected }">
    <div class="skin-card__checkbox"><UiCheckbox v-model="isSelected" /></div>

    <div class="skin-card__image-wrapper">
      <UiImage :src="skin.image" height="120" width="179" />
    </div>

    <div class="skin-card__wrapper">
      <section class="skin-card__container">
        <h2 class="skin-card__name">{{ skin?.name }}</h2>

        <h3
          class="skin-card__exterior-title"
          :style="{ color: skin.exterior?.css_color }"
        >
          {{ skin.exterior?.title }}
        </h3>
      </section>

      <section class="skin-card__container">
        <span class="skin-card__payment-label">We Pay</span>

        <span class="skin-card__price">${{ skin.price }}</span>
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss">
$card-padding: 12px 16px;

$card-height: 276px;
$card-width: 218px;

$container-gap: 6px;

$card-hover-background-color: linear-gradient(
  158.21deg,
  #1d3570 5.62%,
  #110320 93.67%
);

$image-wrapper-height: 152px;

$card-active-color: $color-text-secondary;

$price-color: $color-text-secondary;

$background-image: "/assets/images/skin-background.png";

.skin-card {
  padding: $card-padding;
  padding-top: 0;
  border-radius: $primary-border-radius;

  width: $card-width;
  height: $card-height;

  background: $color-bg-tertiary;
  box-shadow: 0px 4px 8px 0px $color-bg-tertiary;

  position: relative;

  &:hover {
    background: $card-hover-background-color;
    cursor: pointer;
  }

  &.active {
    outline: 1px solid $card-active-color;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: calc($card-height - $image-wrapper-height - 16px);
  }

  &__image-wrapper {
    @include default-background-image($background-image);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: $image-wrapper-height;
  }

  &__checkbox {
    position: absolute;
    top: 8px;
    right: 8.5px;
  }

  &__name {
    @include text-regular;

    min-height: 32px;

    overflow: hidden;
    text-wrap: ellipsis;
  }

  &__exterior-title {
    @include text-small;

    text-transform: uppercase;
  }

  &__payment-label {
    @include text-small;
    opacity: 80%;

    text-transform: uppercase;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: $container-gap;
  }

  &__price {
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: $price-color;
  }
}
</style>
