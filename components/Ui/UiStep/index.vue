<script setup lang="ts">
import { activeStepKey } from "../UiStepper/consts/provide-keys";

const { title } = defineProps<{
  title: string;
}>();

const activeStep = inject<Ref<string>>(activeStepKey);

const isActive = computed(() => activeStep?.value === title);
</script>

<template>
  <article class="step-content" v-show="isActive">
    <slot :isActive="isActive" />
  </article>
</template>

<style scoped lang="scss">
.step-content {
  background-color: $thirdly-background-color;

  padding: 12px;

  border-bottom-left-radius: $primary-border-radius;
  border-bottom-right-radius: $primary-border-radius;
}
</style>
