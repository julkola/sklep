<template>
  <main>
    <TheHeroSlider/>
    <nuxt-link to="products/">Product</nuxt-link>
    <h2 class="text-3xl font-bold">
      Polecamy
    </h2>
    <Slider/>
    <h2 class="text-3xl font-bold">
      Inspiracje i porady
    </h2>
    <div class="flex justify-between">
      <span class="text-2xl">
        Wejdź na nasz blog i zapoznaj się
      </span>
      <NuxtLink
        to="/blog"
        class="inline-block font-semibold px-5 py-2 bg-gradient-to-br rounded-full from-gray-200 to-indigo-200 text-gray-900"
      >
        Odkryj
      </NuxtLink>
    </div>
    <div class="grid grid-cols-3 gap-6 text-center">
      <div>
        <img
          class="block w-full aspect-square bg-slate-100 object-cover rounded-xl"
          src="/img/article/1.jpg"
          alt=""
          width="300"
          height="300"
        >
        <h3 class="text-xl font-semibold my-3">
          Jaki spf na wakacje nad morzem?
        </h3>
        <span class="block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit laborum fugiat aperiam dolor accusamus ad eum amet error a vitae! Perspiciatis itaque numquam unde quod cumque rem ipsum enim nihil.
        </span>
        <NuxtLink
          to="/article/1"
          class="mt-4 inline-block font-semibold px-5 py-2 bg-gradient-to-br rounded-full from-gray-200 to-indigo-200 text-gray-900"
        >
          Przeczytaj
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
