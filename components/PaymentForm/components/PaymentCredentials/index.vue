<script setup lang="ts">
import type { PaymentWithoutPath } from "../../types/payment-without-path.type";
import { validationByPaymentMethodMap } from "./consts/payment-method-validation";
import { getInvalidMessage } from "./helpers/getInvalidMessage";
import { getPaymentLabel } from "./helpers/getPaymentLabel";
import { getTotalsSummary } from "./helpers/getTotalsSummary";
import ArrowNext from "~/assets/icons/arrow-next.svg";
import ArrowPrev from "~/assets/icons/arrow-prev.svg";

const { selectedPaymentMethod, totalSelectedSkinsCost } = defineProps<{
  selectedPaymentMethod: PaymentWithoutPath | null;
  totalSelectedSkinsCost: number;
}>();

const emits = defineEmits<{
  next: [];
  prev: [];
}>();

const modelValue = defineModel<string>();

const inputLabel = computed(() => getPaymentLabel(selectedPaymentMethod));

const totalDetails = computed(() =>
  getTotalsSummary(selectedPaymentMethod, totalSelectedSkinsCost)
);

const invalidMessage = computed(() => getInvalidMessage(selectedPaymentMethod));

const isCardNumberValid = computed(() =>
  selectedPaymentMethod?.description
    ? Boolean(
        modelValue.value?.match(
          validationByPaymentMethodMap[selectedPaymentMethod?.description]
        )
      )
    : false
);

const isNextButtonDisabled = computed(
  () => !modelValue.value || !isCardNumberValid.value
);
</script>

<template>
  <form @submit.prevent="emits('next')" class="payment-credentials">
    <UiAlert type="warning">
      The amount may not be the same as shown on your wallet due to differences
      in exchange rates.
      <br />
      <br />
      It may take up to three business days for the bank to credit your payment.
      Please wait for the transaction.
    </UiAlert>

    <SummaryDetails :details="totalDetails" />

    <UiInput
      v-model="modelValue"
      :label="inputLabel"
      :isValid="isCardNumberValid"
      :mask="selectedPaymentMethod?.type"
    >
      <template #errorMessage>
        <UiAlert type="error">{{ invalidMessage }}</UiAlert>
      </template>
    </UiInput>

    <div class="payment-credentials__step-buttons">
      <UiButton type="submit" size="lg" :isDisabled="isNextButtonDisabled">
        Next
        <template #append-icon><ArrowNext /></template>
      </UiButton>

      <UiButton
        type="button"
        color="transparent"
        size="sm"
        @click="emits('prev')"
      >
        Back
        <template #prepend-icon><ArrowPrev /></template>
      </UiButton>
    </div>
  </form>
</template>

<style scoped lang="scss">
.payment-credentials {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__step-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
