<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";

defineProps<{
  skin: Skin;
}>();
</script>

<template>
  <article class="skin-card">
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
$card-border-radius: 4px;

$image-wrapper-height: 152px;

.skin-card {
  padding: $card-padding;
  padding-top: 0;
  border-radius: $card-border-radius;

  width: $card-width;
  height: $card-height;

  background: $thirdly-background-color;
  box-shadow: 0px 4px 8px 0px #00000033;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: calc($card-height - $image-wrapper-height - 16px);
  }

  &__image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("/assets/images/skin-background.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    width: 100%;
    height: $image-wrapper-height;
  }

  &__name {
    line-height: 16px;
    font-size: 14px;

    min-height: 32px;

    overflow: hidden;
    text-wrap: ellipsis;
  }

  &__exterior-title {
    font-size: 12px;
    line-height: 12px;

    text-transform: uppercase;
  }

  &__payment-label {
    font-size: 12px;
    line-height: 12px;
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
    color: #6eefa9;
  }
}
</style>
