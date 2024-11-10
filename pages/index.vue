<script setup lang="ts">
import { SortDirection } from "~/components/SortBar/enums/sort-direction.enum";
import type { Skin } from "~/types/interfaces/skin.interface";
import type { ServerResponse } from "~/types/types/server-response.type";

definePageMeta({
  layout: "default",
});

const { data: skins } = useFetch<ServerResponse<Skin[]>>("/api/skins");

const selectedSkins = ref<Skin[]>([]);

const sortModel = ref<SortDirection | null>(null);

const isPaymentMethodPicked = ref(false);

const filterSkins = (skins: Ref<Skin[]>, skin: Skin) =>
  skins.value.filter((_skin) => _skin.id !== skin.id);

const handleSelectSkin = (skin: Skin) => {
  if (!isPaymentMethodPicked.value) {
    if (isSkinSelected(selectedSkins.value, skin)) {
      selectedSkins.value = filterSkins(selectedSkins, skin);
    } else {
      selectedSkins.value = [...selectedSkins.value, skin];
    }
  }
};

const onTransferCompleted = () => {
  selectedSkins.value = [];
  isPaymentMethodPicked.value = false;
};

const onPaymentMethodPicked = () => {
  isPaymentMethodPicked.value = true;
};

const onStepBackToPaymentMethod = () => {
  isPaymentMethodPicked.value = false;
};

watch(sortModel, () => {
  if (sortModel.value === SortDirection.DESC && skins?.value?.data.length) {
    skins.value.data = sortSkinsList(skins.value.data, SortDirection.DESC);
  } else if (skins.value?.data.length) {
    skins.value.data = sortSkinsList(skins.value.data, SortDirection.ASC);
  }
});
</script>

<template>
  <main class="page">
    <section
      :class="[
        'page__section',
        { 'page__section--blur': isPaymentMethodPicked },
      ]"
    >
      <SortBar v-model="sortModel" />
      <SkinsList
        :skins="skins?.data"
        :selectedSkins
        @select="handleSelectSkin"
      />
    </section>

    <section>
      <PaymentForm
        :selectedSkins
        @transferCompleted="onTransferCompleted"
        @paymentMethodPicked="onPaymentMethodPicked"
        @stepBackToPaymentMethod="onStepBackToPaymentMethod"
      />
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

    transition: opacity 0.2s;

    &--blur {
      opacity: 0.4;
      pointer-events: none;
    }
  }
}
</style>
