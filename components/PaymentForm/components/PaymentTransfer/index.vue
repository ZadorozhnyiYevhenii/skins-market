<script setup lang="ts">
import type { PaymentTransferStatus } from "./types/payment-transfer-status.type";

const { status } = defineProps<{
  status: PaymentTransferStatus | null;
}>();

const emits = defineEmits<{
  complete: [];
}>();

const isSuccess = computed(() => status === "success");
</script>

<template>
  <div class="payment-transfer">
    <div v-if="isSuccess" class="payment-transfer__container">
      <div class="payment-transfer__main-content">
        <UiImage src="/success.png" alt="Payment transfer successful" height="148" width="148" />

        <div class="payment-transfer__info">
          <h2 class="payment-transfer__status">Transfer succeed!</h2>

          <h3 class="payment-transfer__status-message">
            Please check your balance
          </h3>
        </div>
      </div>

      <UiButton size="lg" color="primary" @click="emits('complete')">
        Great!
      </UiButton>
    </div>

    <div v-else class="payment-transfer__container">
      <div class="payment-transfer__main-content">
        <UiImage src="/error.png" alt="Payment transfer failed" height="148" width="148" />

        <div class="payment-transfer__info">
          <h2 class="payment-transfer__status">Transfer error</h2>

          <h3 class="payment-transfer__status-message">
            Please contact our support team to go through the issue
          </h3>
        </div>
      </div>

      <UiButton size="lg" color="primary" @click="emits('complete')">
        Contact support
      </UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.payment-transfer {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    padding-block: 16px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__status {
    @include font-roboto;
    @include text-large;
    text-align: center;
  }

  &__status-message {
    @include font-roboto;
    @include text-regular;
    text-align: center;

    opacity: 80%;
  }
}
</style>
