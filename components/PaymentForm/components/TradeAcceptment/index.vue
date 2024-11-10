<script setup lang="ts">
import { tradeInfoDetails } from "./consts/trade-info-details";
import ArrowPrev from "~/assets/icons/arrow-prev.svg";
import LinkIcon from "~/assets/icons/link-icon.svg";
import { TRADE_TIMEOUT_TIME } from "./consts/timeout-time";

defineProps<{
  isActive: boolean;
}>();

const emits = defineEmits<{
  next: [];
  prev: [];
}>();

const isTimerEnd = ref(false);

const onTimerEnd = () => {
  isTimerEnd.value = true;
};
</script>

<template>
  <div class="trade-accept">
    <div class="trade-accept__container">
      <UiTimer
        v-if="isActive"
        :initialTime="TRADE_TIMEOUT_TIME"
        @timerEnd="onTimerEnd"
      >
        <span class="trade-accept__timer-exception">
          You have 6 mins to accept trade, otherwise it will be canceled.
        </span>
      </UiTimer>

      <UiAlert type="warning">
        <p>Example of caution text. For a trade to be safe please check:</p>
        <ul>
          <li>— Code in the message</li>
          <li>— Bot name</li>
          <li>
            — If you have 2 trades, one active and one canceled and so on...
          </li>
        </ul>
      </UiAlert>

      <SummaryDetails :details="tradeInfoDetails" />

      <UiAlert v-if="isTimerEnd" type="error">
        Time is over. Start new trade proccess.
      </UiAlert>
    </div>

    <div class="trade-accept__confirm-wrapper">
      <span class="trade-accept__confirm-label">Accept trade:</span>
      <UiButton size="md" color="secondary" @click="emits('next')"
        >Accept Trade <template #append-icon> <LinkIcon /> </template
      ></UiButton>
    </div>

    <UiButton
      color="transparent"
      size="sm"
      @click="emits('prev')"
      :isDisabled="isTimerEnd"
      >Back
      <template #prepend-icon><ArrowPrev /></template>
    </UiButton>
  </div>
</template>

<style scoped lang="scss">
.trade-accept {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__confirm-wrapper {
    padding: 12px;
    border-radius: $primary-border-radius;
    background: #ffffff12;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__confirm-label {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
  }

  &__timer-exception {
    @include font-roboto;
    font-size: 14px;
    font-weight: 400;

    opacity: 80%;
  }
}
</style>
