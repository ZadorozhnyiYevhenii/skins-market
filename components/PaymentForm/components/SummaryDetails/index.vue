<script setup lang="ts">
import type { SummaryDetailsOptions } from "./types/summary-details-options.interface";

defineProps<{
  details: SummaryDetailsOptions[];
}>();
</script>

<template>
  <article class="summary-details">
    <ul class="summary-details__list">
      <li
        v-for="detail in details"
        :key="detail.title"
        class="summary-details__item"
      >
        <span>{{ detail.title }}</span>

        <div class="summary-details__dots" />

        <span class="summary-details__value">{{ detail.value }}</span>
      </li>
    </ul>
  </article>
</template>

<style scoped lang="scss">
.summary-details {
  padding: 12px;
  backdrop-filter: blur(32px);
  background: #ffffff1a;
  border-radius: $primary-border-radius;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__item {
    display: flex;
    gap: 8px;

    text-transform: uppercase;
    font-size: 12px;
    line-height: 12px;
    white-space: nowrap;
  }

  &__value {
    color: $secondary-text-color;
    font-weight: 500;
  }

  &__dots {
    width: 100%;
    border-bottom: 2px dotted #ffffff33;
  }
}
</style>
