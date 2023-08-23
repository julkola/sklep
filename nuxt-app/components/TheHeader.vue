<template>
    <header class="sticky top-0 inset-x-0 bg-white z-40">
        <div class="flex justify-between py-2 px-4 sm:border-b-2 border-gray-900">
            <nuxtLogo></nuxtLogo>
            <div class="flex items-center">
                <SearchBar/>
                <button class="relative flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10">
                    <UserIcon></UserIcon>
                    <div class="absolute top-full right-0 mt-2 py-2 px-4 text-gray-900 bg-white shadow-lg">
                        <NuxtLink to="/signin">Zaloguj&nbsp;się</NuxtLink>
                    </div>
                </button>
                <button class="flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10">
                    <HeartIcon></HeartIcon>
                </button>
                <button
                    @click="emits('openCart')"
                    class="flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 sm:px-4 h-10 w-10 sm:w-auto"
                >
                    <BasketIcon></BasketIcon>
                    <span class="hidden sm:inline sm:ml-2">
                        {{ cart.sum.toFixed(2) }}&nbsp;zł
                    </span>
                </button>
                <button
                    @click="showMenu = true"
                    class="sm:hidden flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10"
                >
                    <MenuIcon></MenuIcon>
                </button>
                <MobileMenu :showMenu="showMenu" @close="showMenu=false"/>
            </div>
        </div>
        <div class="hidden sm:flex py-1 px-4 text-lg font-bold text-gray-900 border-b-2 border-gray-900">
            <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Włosy</nuxt-link>
            <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Ciało</nuxt-link>
            <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Twarz</nuxt-link>
        </div>
    </header>
</template>
<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const cart = useCartStore();
const emits = defineEmits(["openCart"]);
const showMenu = ref(false);
</script>