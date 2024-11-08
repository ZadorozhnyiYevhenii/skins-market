<script setup lang="ts">
import { activeStepKey } from "../Stepper/consts/provide-keys";

const { title } = defineProps<{
  title: string;
}>();

const activeStep = inject<Ref<string>>(activeStepKey);

const isActive = computed(() => activeStep?.value === title);
</script>

<template>
  <article class="step-content" v-show="isActive">
    <slot />
  </article>
</template>

<style scoped lang="scss">
.step-content {
  background-color: $thirdly-background-color;

  height: 200px;
  padding: 12px;
}
</style>
