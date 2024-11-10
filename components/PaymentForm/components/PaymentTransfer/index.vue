<script setup lang="ts">
import type { PaymentTransferStatus } from "./types/payment-transfer-status.type";

const { status } = defineProps<{
  status: PaymentTransferStatus;
}>();

const emits = defineEmits<{
  complete: [];
}>()

const isSuccess = computed(() => status === "success");
</script>

<template>
  <div>
    <div v-if="isSuccess">
      <UiButton size="lg" color="primary" @click="emits('complete')">
        Great!
      </UiButton>
    </div>

    <div v-else>
      <UiButton size="lg" color="primary" @click="emits('complete')">
        Contact support
      </UiButton>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
