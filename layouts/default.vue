<template>
  <main class="layout">
    <Header />

    <slot />

    <Footer />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
