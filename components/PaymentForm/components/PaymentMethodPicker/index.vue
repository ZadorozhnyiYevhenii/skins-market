<script setup lang="ts">
import { paymentsMethodsByCountry } from "~/components/PaymentForm/consts/payments-methods-by-country";
import { countryOptions } from "~/components/PaymentForm/consts/select-country-options";
import { CountriesEnum } from "~/components/PaymentForm/enums/countries";
import type { PaymentWithoutPath } from "~/components/PaymentForm/types/payment-without-path.type";
import type { Payment } from "~/components/PaymentForm/types/payment.interface";

const props = defineProps<{
  selectedSkinsCount: number;
  selectedPaymentMethod: PaymentWithoutPath | null;
}>();

const emits = defineEmits<{
  choose: [payment: PaymentWithoutPath];
  next: [];
}>();

const modelValue = defineModel({
  default: CountriesEnum.USA,
});

const isNextButtonDisabled = computed(
  () => !props.selectedPaymentMethod || !props.selectedSkinsCount
);

const onPaymentMethodChoose = (payment: Payment) => {
  const { path, ...restData } = payment;

  emits("choose", restData);
};

watch(
  () => props.selectedSkinsCount,
  () => {
    console.log(Boolean(props.selectedSkinsCount));
  }
);
</script>

<template>
  <div class="payment-method-picker">
    <div class="payment-method-picker__container">
      <UiSelect
        v-model="modelValue"
        :options="countryOptions"
        size="sm"
        upperCase
      />

      <ul class="payment-method-picker__list">
        <li
          v-for="(payment, index) in paymentsMethodsByCountry[modelValue]"
          :class="[
            'payment-method-picker__item',
            { 'payment-method-picker__item--active': !!selectedSkinsCount },
            {
              'payment-method-picker__item--picked':
                payment.description === selectedPaymentMethod?.description &&
                !!selectedSkinsCount,
            },
          ]"
          @click="onPaymentMethodChoose(payment)"
        >
          <UiImage
            :src="payment.path"
            :alt="payment.description"
            :key="index"
            height="34"
          />
        </li>
      </ul>
    </div>

    <UiButton
      @click="emits('next')"
      size="lg"
      :isDisabled="isNextButtonDisabled"
      >Next
      <template #append-icon><SvgoArrowNext /></template>
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
$item-picked-background: linear-gradient(
  158.21deg,
  #264ba8 5.62%,
  #030c23 93.67%
);
$item-picked-border: 1px solid #2c64f1;

.payment-method-picker {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  }

  &__item {
    cursor: pointer;
    background: #00000033;
    padding: 15px 20px;
    border: 1px solid #ffffff1a;
    border-radius: $primary-border-radius;
    width: 122px;

    display: flex;
    justify-content: center;

    opacity: 20%;

    pointer-events: none;

    &--active {
      opacity: 100%;

      cursor: pointer;
      pointer-events: all;
    }

    &--picked {
      border: $item-picked-border;
      background: $item-picked-background;
      opacity: 100%;
      cursor: pointer;
      pointer-events: all;
    }
  }
}
</style>
