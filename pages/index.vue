<script setup lang="ts">
import { SortDirection } from "~/components/SortBar/enums/sort-direction.enum";
import type { Skin } from "~/types/interfaces/skin.interface";
import type { ServerResponse } from "~/types/types/server-response.type";

definePageMeta({
  layout: "default",
});

const { data: skins } = useFetch<ServerResponse<Skin[]>>("/api/skins");

const selectedSkins = ref<Skin[]>([]);

// What is the default sort model value?
const sortModel = ref(SortDirection.DESC);

const filterSkins = (skins: Ref<Skin[]>, skin: Skin) =>
  skins.value.filter((_skin) => _skin.id !== skin.id);

const handleSelectSkin = (skin: Skin) => {
  if (selectedSkins.value.includes(skin)) {
    selectedSkins.value = filterSkins(selectedSkins, skin);
  } else {
    selectedSkins.value = [...selectedSkins.value, skin];
  }
};

watch(sortModel, () => {
  if (sortModel.value === SortDirection.DESC && skins?.value?.data.length) {
    skins.value.data = skins?.value.data?.toSorted((a, b) => a.price - b.price);
  } else if (skins.value?.data.length) {
    skins.value.data = skins?.value.data?.toSorted((a, b) => b.price - a.price);
  }
});
</script>

<template>
  <main class="page">
    <section class="page__section">
      <SortBar v-model="sortModel" />

      <SkinsList
        :skins="skins?.data"
        :selectedSkins="selectedSkins"
        @selectSkin="handleSelectSkin"
      />
    </section>

    <section>
      <div class="div"></div>
    </section>
  </main>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  gap: 16px;
  align-items: flex-start;

  padding: 16px 32px 32px;

  &__section {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;
  }
}

.div {
  width: 300px;
  height: 300px;

  background: white;
}
</style>
