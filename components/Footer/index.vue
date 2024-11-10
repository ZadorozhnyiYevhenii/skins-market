<script setup lang="ts">
import { paymentMethods } from "./consts/payment-methods-images";
</script>

<template>
  <footer class="footer">
    <CompanyLogo />

    <hr class="footer__separator" />

    <section class="footer__container">
      <p class="footer__policy">
        Copyright © Many.Skins 2024. All Rights Reserved.
        <br />
        Powered by Steam. Not affiliated with Valve Corp.
      </p>

      <ul class="footer__payment-list">
        <li v-for="(method, index) in paymentMethods">
          <UiImage
            :src="method.path"
            :alt="method.description"
            :key="index"
            height="24"
          />
        </li>
      </ul>
    </section>
  </footer>
</template>

<style scoped lang="scss">
$policy-opacity: 60%;
$separator-opacity: 10%;

.footer {
  @include font-roboto;

  background: $color-bg-primary;
  padding: 32px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  &__separator {
    height: 1px;
    border: none;
    background-color: $color-text-primary;
    opacity: $separator-opacity;
  }

  &__container {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
      gap: 16px;
    }
  }

  &__policy {
    color: $color-text-primary;
    opacity: $policy-opacity;

    font-size: 12px;
  }

  &__payment-list {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
