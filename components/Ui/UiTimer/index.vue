<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const ONE_HOUR_IN_MINUTES = 60;

const { initialTime } = defineProps<{
  initialTime: number;
}>();

const emits = defineEmits<{
  timerEnd: [];
}>();

const timeLeft = ref(initialTime * ONE_HOUR_IN_MINUTES);
const isLeft = ref(true);

let timerInterval: NodeJS.Timeout | null = null;

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / ONE_HOUR_IN_MINUTES)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft.value % ONE_HOUR_IN_MINUTES)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
});

const startTimer = () => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
    } else {
      stopTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    emits("timerEnd");
    isLeft.value = false;
    timerInterval = null;
  }
};

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
  <div :class="['ui-timer', { 'ui-timer--error': !isLeft }]">
    <h1 :class="['ui-timer__time', { 'ui-timer__time--error': !isLeft }]">
      {{ formattedTime }}
    </h1>

    <slot />
  </div>
</template>

<style scoped lang="scss">
$primary-timer-color: #b3c8ff;
$error-color: #ff5a5a;

.ui-timer {
  padding: 12px;
  border: 1px solid $primary-timer-color;
  border-radius: 8px;

  &--error {
    border: 1px solid $error-color;
  }

  &__time {
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    color: $primary-timer-color;

    &--error {
      color: $error-color;
    }
  }
}
</style>
