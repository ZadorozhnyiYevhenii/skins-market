<script setup lang="ts">
import { sortOptions } from "./consts/select-options";
import type { SortDirection } from "./enums/sort-direction.enum";

const sortModel = defineModel<SortDirection | null>();

const defaultOption = computed(() => sortOptions.at(0));
</script>

<template>
  <div class="sort-bar">
    <UiSelect
      v-model="sortModel"
      :defaultOption
      :options="sortOptions"
      size="md"
      iconPosition="prepend"
    />
  </div>
</template>

<style scoped lang="scss">
.sort-bar {
  width: 100%;
  height: 64px;

  background-color: $thirdly-background-color;
  border-radius: $primary-border-radius;

  display: flex;
  align-items: center;
  justify-content: end;

  padding: 12px;
}
</style>
