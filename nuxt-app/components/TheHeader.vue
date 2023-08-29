<template>
    <header class="sticky top-0 inset-x-0 bg-white z-40 shadow">
        <div class="flex justify-between py-2 px-4">
            <nuxtLogo></nuxtLogo>
            <div class="flex items-center">
                <SearchBar/>
                <button
                    @click="emits('showLogin')"
                    class="relative flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10"
                >
                    <UserIcon></UserIcon>
                </button>

                <button class="flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10">
                    <HeartIcon></HeartIcon>
                </button>
                <button
                    @click="emits('openCart')"
                    :disabled="route === 'cart'"
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
        <TheMenu/>
    </header>
</template>
<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const route = useRoute().name;
const cart = useCartStore();
const emits = defineEmits(["openCart", "showLogin"]);
const showMenu = ref(false);
</script>