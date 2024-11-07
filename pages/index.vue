<script setup lang="ts">
import type { Skin } from "~/types/interfaces/skin.interface";
import type { ServerResponse } from "~/types/types/server-response.type";

definePageMeta({
  layout: "default",
});

const { data: skins } = useFetch<ServerResponse<Skin[]>>("/api/skins");
</script>

<template>
  <SkinsList :skins="skins?.data" />
</template>

<style lang="scss"></style>
