<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";
import type { ServerResponse } from "~/types/types/server-response.type";

definePageMeta({
  layout: "default",
});

const { data: skins } = useFetch<ServerResponse<Skin[]>>("/api/skins");

const selectedSkins = ref<Skin[]>([]);

const handleSelectSkin = (skin: Skin) => {
  if (selectedSkins.value.includes(skin)) {
    selectedSkins.value = selectedSkins.value.filter(
      (selectedSkin) => selectedSkin.id !== skin.id
    );
  } else {
    selectedSkins.value = [...selectedSkins.value, skin];
  }
};
</script>

<template>
  <SkinsList
    :skins="skins?.data"
    :selectedSkins="selectedSkins"
    @selectSkin="handleSelectSkin"
  />
</template>

<style lang="scss"></style>
