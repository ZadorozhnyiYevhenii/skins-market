<script setup lang="ts">
import { sortOptions } from "./consts/select-options";

const sortModel = defineModel();

const activeIcon = computed(
  () => sortOptions.find((option) => option.value === sortModel.value)?.icon
);
</script>

<template>
  <div class="sort-bar">
    <UiSelect v-model="sortModel" :options="sortOptions" size="md">
      <template #prepend-icon>
        <Component :is="activeIcon" /> 
      </template>
    </UiSelect>
  </div>
</template>

<style scoped lang="scss">
.sort-bar {
  width: 100%;
  height: 64px;

  background-color: $thirdly-background-color;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: end;

  padding: 12px;
}
</style>
