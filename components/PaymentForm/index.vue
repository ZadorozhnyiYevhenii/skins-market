<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";
import type { PaymentWithoutPath } from "./types/payment-without-path.type";
import { CountriesEnum } from "./enums/countries";
import { getTotalSkinsCostWithDollars } from "./helpers/normalize-price";

const { selectedSkins } = defineProps<{
  selectedSkins: Skin[];
}>();

const selectedCountry = ref(CountriesEnum.USA);

const selectedPaymentMethod = ref<PaymentWithoutPath | null>(null);

const totalSelectedSkinsCost = computed(() =>
  getTotalSkinsCostWithDollars(selectedSkins)
);

const selectedSkinsCount = computed(() => selectedSkins.length);

const onPaymentMethodChoose = (payment: PaymentWithoutPath) => {
  if (selectedSkinsCount.value) {
    if (payment.description === selectedPaymentMethod.value?.description) {
      selectedPaymentMethod.value = null;
    } else {
      selectedPaymentMethod.value = payment;
    }
  }
};

watch(selectedSkinsCount, () => {
  if (!selectedSkinsCount.value) {
    selectedPaymentMethod.value = null;
  }
});

watch(selectedCountry, () => {
  selectedPaymentMethod.value = null;
});
</script>

<template>
  <form class="payment-form">
    <div class="payment-form__head-wrapper">
      <div class="payment-form__totals-container">
        <span class="payment-form__count"
          >{{ selectedSkinsCount }} items for</span
        >

        <span class="payment-form__total-cost">{{
          totalSelectedSkinsCost
        }}</span>
      </div>

      <hr class="payment-form__separator" />
    </div>

    <UiStepper v-slot="slotProps">
        <UiStep title="Payment Method">
          <PaymentMethodPicker
            v-model="selectedCountry"
            @choose="onPaymentMethodChoose"
            @next="slotProps.nextStep"
            :selectedSkinsCount
            :selectedPaymentMethod
          />
        </UiStep>

        <UiStep title="Payment Details">
          <PaymentCredentials
            @next="slotProps.nextStep"
            @prev="slotProps.prevStep"
          />
        </UiStep>

        <UiStep title="Confirmation on Steam">
          <button>Confirm on Steam</button>
        </UiStep>

        <UiStep title="Payment transfer">
          <button>dqdhuiqid</button>
        </UiStep>
    </UiStepper>
  </form>
</template>

<style scoped lang="scss">
.payment-form {
  border-radius: $primary-border-radius;

  width: 400px;

  background: linear-gradient(163.45deg, #223056 4.48%, #0e1526 93.42%);

  &__choose-payment-step-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__choose-payment-main-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__totals-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__head-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 20px;
  }

  &__payment-methods-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__payment-methods-item {
    cursor: pointer;
    background: #00000033;
    padding: 15px 20px;
    border: 1px solid #ffffff1a;
    border-radius: $primary-border-radius;
    width: 122px;

    display: flex;
    justify-content: center;

    opacity: 20%;

    &.active {
      opacity: 100%;
    }
  }

  &__count {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    text-align: left;

    opacity: 80%;
  }

  &__total-cost {
    font-size: 48px;
    font-weight: 500;
    line-height: 48px;
    text-align: left;
    color: $secondary-text-color;
  }

  &__separator {
    height: 1px;
    border: none;
    background-color: $text-primary-color;
    opacity: 10%;
  }
}
</style>
