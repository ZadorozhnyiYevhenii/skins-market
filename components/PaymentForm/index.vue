<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";
import type { PaymentWithoutPath } from "./types/payment-without-path.type";
import { CountriesEnum } from "./enums/countries";
import {
  getPriceWithDollars,
  getSkinsTotalCost,
} from "./helpers/normalize-price";
import type { PaymentTransferStatus } from "./components/PaymentTransfer/types/payment-transfer-status.type";

const { selectedSkins } = defineProps<{
  selectedSkins: Skin[];
}>();

const emits = defineEmits<{
  transferCompleted: [];
}>();

const selectedCountry = ref(CountriesEnum.USA);

const selectedPaymentMethod = ref<PaymentWithoutPath | null>(null);

const paymentCode = ref("");

const paymentTransferStatus = ref<PaymentTransferStatus | null>(null);

const totalSelectedSkinsCost = computed(() => getSkinsTotalCost(selectedSkins));

const totalSelectedSkinsCostWithDollar = computed(() =>
  getPriceWithDollars(totalSelectedSkinsCost.value)
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

const onTradeAccept = (result: PaymentTransferStatus, nextStep: () => void) => {
  paymentTransferStatus.value = result;
  nextStep();
};

const onTransferComplete = (setInitialStep: () => void) => {
  selectedCountry.value = CountriesEnum.USA;
  selectedPaymentMethod.value = null;
  paymentCode.value = "";
  paymentTransferStatus.value = null;
  emits("transferCompleted");
  setInitialStep();
};

watch(selectedSkinsCount, () => {
  if (!selectedSkinsCount.value) {
    selectedPaymentMethod.value = null;
  }
});

watch(selectedCountry, () => {
  selectedPaymentMethod.value = null;
  paymentCode.value = "";
});

watch(selectedPaymentMethod, () => {
  paymentCode.value = "";
});
</script>

<template>
  <section class="payment-form">
    <div class="payment-form__head-wrapper">
      <div class="payment-form__totals-container">
        <span class="payment-form__count"
          >{{ selectedSkinsCount }} items for</span
        >

        <span class="payment-form__total-cost">{{
          totalSelectedSkinsCostWithDollar
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
          v-model="paymentCode"
          @next="slotProps.nextStep"
          @prev="slotProps.prevStep"
          :selectedPaymentMethod
          :totalSelectedSkinsCost="totalSelectedSkinsCost"
        />
      </UiStep>

      <UiStep title="Confirmation on Steam" v-slot="{ isActive }">
        <TradeAcceptment
          :isActive
          @next="(result) => onTradeAccept(result, slotProps.nextStep)"
          @prev="slotProps.prevStep"
        />
      </UiStep>

      <UiStep title="Payment transfer">
        <PaymentTransfer
          @complete="onTransferComplete(slotProps.setInitialStep)"
          :status="paymentTransferStatus"
        />
      </UiStep>
    </UiStepper>
  </section>
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
