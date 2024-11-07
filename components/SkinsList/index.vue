<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";

const { skins, selectedSkins } = defineProps<{
  skins: Skin[] | undefined;
  selectedSkins: Skin[];
}>();

const emits = defineEmits<{
  (e: "selectSkin", skin: Skin): void;
}>();


</script>

<template>
  <ul class="skins-list">
    <li v-for="skin in skins" :key="skin.id" @click="emits('selectSkin', skin)">
      <SkinCard :skin="skin" :selectedSkins="selectedSkins" />
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
