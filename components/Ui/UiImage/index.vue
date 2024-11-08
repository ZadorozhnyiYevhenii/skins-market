<script setup lang="ts">
const attrs = useAttrs();

const nuxtRouterTag = "nuxt-link";
const linkTag = "a";

const component = computed(() => {
  if (attrs.to) {
    return nuxtRouterTag;
  }

  if (attrs.href) {
    return linkTag;
  }

  return null;
});
</script>

<template>
  <Component :is="component" v-if="component">
    <NuxtImg draggable="false" v-bind="{ ...attrs }" />
  </Component>

  <NuxtImg v-else draggable="false" v-bind="{ ...attrs }" />
</template>

<style scoped lang="scss"></style>
