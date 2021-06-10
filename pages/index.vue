
<template>
  <div class="relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Norbert Brett</span>
              {{ '   ' }}
              <span class="block text-green-400 xl:inline">Blog</span>
            </h1>
            <p class="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A warm welcome to my blog 🍻
            </p>
            <div class="text-lg text-bold sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <NuxtLink to="/blog/" class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  See the latest posts 👋
                </a>
              </NuxtLink>

            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1247&q=80" alt="" />
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
  color:#33fe9f}
</style>

