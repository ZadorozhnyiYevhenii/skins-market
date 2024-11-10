<template>
  <header class="header">
    <nav class="header__nav">
      <CompanyLogo />
    </nav>

    <div class="header__container">
      <h1 class="header__title">Sell CS:GO skins</h1>
      <div class="header__background" />
    </div>
  </header>
</template>

<style scoped lang="scss">
$header-background: #234b9c;
.header {
  &__nav {
    padding: 15px 32px 15px;
    height: 64px;
    background: $secondary-background-color;
    backdrop-filter: blur(32px);
  }

  &__container {
    position: relative;

    background: $header-background;
    height: 92px;
  }

  &__background {
    @include default-background-image("/assets/images/header_background.png");

    position: absolute;

    height: 100%;
    max-width: 290px;
    width: 100%;

    right: 0;
    top: 0;
  }

  &__title {
    @include font-roboto;
    @include text-large;

    padding: 40px 32px 28px;
  }
}
</style>
