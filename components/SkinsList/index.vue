<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";

defineProps<{
  skins: Skin[] | undefined;
}>();
</script>

<template>
  <ul class="skins-list">
    <li v-for="skin in skins" :key="skin.id">
      <SkinCard :skin="skin" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.skins-list {
  display: flex;
  flex-wrap: wrap;

  gap: 4px;
}
</style>
