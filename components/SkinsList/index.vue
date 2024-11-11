<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";

const { skins, selectedSkins } = defineProps<{
  skins: Skin[] | undefined;
  selectedSkins: Skin[];
}>();

const emits = defineEmits<{
  select: [skin: Skin];
}>();
</script>

<template>
  <ul class="skins-list">
    <li v-for="skin in skins" :key="skin.id" @click="emits('select', skin)">
      <SkinCard :skin="skin" :selectedSkins="selectedSkins" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.skins-list {
  width: 100%;
  display: grid;
  gap: 4px;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
</style>
