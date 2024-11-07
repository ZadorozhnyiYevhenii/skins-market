<template>
  <header class="header">
    <CompanyLogo />
  </header>
</template>

<style scoped lang="scss">
.header {
  @include font-roboto;

  height: 64px;
  background: $secondary-background-color;
  backdrop-filter: blur(32px);
  padding: 15px 32px 15px;
}
</style>
