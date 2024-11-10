<script setup lang="ts">
import ArrowNext from "~/assets/icons/arrow-next.svg";
import { activeStepKey } from "./consts/provide-keys";

const activeIndex = ref(1);

const slots = useSlots().default;

const steps: string[] = slots ? slots().map((slot) => slot.props?.title) : [];

const activeStep = ref(steps.at(0));

provide(activeStepKey, readonly(activeStep));

const isLastStep = (stepIndex: number) => stepIndex !== steps.length - 1;

const nextStep = () => {
  if (activeIndex.value <= steps.length) {
    activeIndex.value++;
  }
};

const prevStep = () => {
  if (activeIndex.value > 1) {
    activeIndex.value--;
  }
};

const setInitialStep = () => {
  activeIndex.value = 1;
};

watch(activeIndex, () => {
  activeStep.value = steps[activeIndex.value - 1];
});
</script>

<template>
  <section class="stepper">
    <ul class="stepper__list">
      <li
        v-for="(step, index) in steps"
        :key="index"
        :class="['stepper__item', { active: index + 1 === activeIndex }]"
      >
        {{ step }}

        <ArrowNext
          v-if="isLastStep(index)"
          class="stepper__arrow"
          alt="Next step"
        />
      </li>
    </ul>

    <slot
      :nextStep="nextStep"
      :prevStep="prevStep"
      :setInitialStep="setInitialStep"
    />
  </section>
</template>

<style scoped lang="scss">
.stepper {
  width: 100%;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 9px;

    padding-inline: 20px;
    padding-bottom: 20px;
  }

  &__arrow {
    flex-shrink: 0;
  }

  &__item {
    @include text-small;
    letter-spacing: 0.03em;

    opacity: 60%;

    display: inline-flex;
    align-items: center;
    gap: 9px;


    text-transform: uppercase;

    &.active {
      color: #ffb287;
    }
  }
}
</style>
