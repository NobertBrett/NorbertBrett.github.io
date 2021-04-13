
<template>
  <div class="container mx-auto text-center">
    <div>
      <h1 class="title">
        Hi my name is <span class ="hero-name">Norbert Brett</span>
      </h1>
      <p> And this is my blog</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/_settings.scss';

.button {
  display: inline-block;
  @apply mt-3;
  font-size: 1.2rem;
  font-family: $ff-serif;
  color: #fff;
  background-color: $c-primary;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
}

.title {
  @apply block;
  @apply mt-40;
  color: $c-navy;
  font-family: $ff-sans;
  @apply font-semibold;
  @apply text-5xl;
  letter-spacing: 1px;
}
.hero-name{
  color:#33fe9f
</style>
