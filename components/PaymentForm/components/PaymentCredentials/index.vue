<script setup lang="ts">
const emits = defineEmits<{
  next: [];
  prev: [];
}>();
</script>

<template>
  <div class="payment-credentials">
    <UiAlert type="warning">
      The amount may not be the same as shown on your wallet due to differences
      in exchange rates.
      <br />
      <br />
      It may take up to three business days for the bank to credit your payment.
      Please wait for the transaction.
    </UiAlert>

    <div class="payment-credentials__step-buttons">
      <UiButton size="lg" @click="emits('next')">
        Next
        <template #append-icon><SvgoArrowNext /></template>
      </UiButton>

      <UiButton color="transparent" @click="emits('prev')">
        Back
        <template #prepend-icon><SvgoArrowPrev /></template>
      </UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.payment-credentials {
  &__step-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
}
</style>
