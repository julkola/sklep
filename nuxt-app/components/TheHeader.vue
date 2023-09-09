<template>
    <header class="sticky top-0 inset-x-0 bg-white z-40 shadow">
        <div class="flex justify-between py-2 px-4">
            <NuxtLink to="/">
                <nuxtLogo></nuxtLogo>
            </NuxtLink>
            <div class="flex items-center">
                <SearchBar/>
                <div class="relative group ml-4 ">
                    <button
                        @click="() =>{ if (!user) emits('showLogin') }"
                        class="flex items-center justify-center bg-gray-900 text-white rounded-full w-10 h-10"
                    >
                        <IconUser/>
                    </button>
                    <div
                        v-if="user"
                        class="hidden group-hover:flex group-focus-visible:flex absolute top-full right-1/2 translate-x-1/2 flex-col p-4 shadow-lg rounded-md bg-white"
                    >
                        <button
                            @click="signOut"
                            class="relative px-5 py-2 after:absolute after:bg-gray-100 after:shadow-lg after:rounded-md after:inset-0 after:duration-150 after:opacity-0 hover:after:opacity-100 text-left whitespace-nowrap"
                        >
                            <span class="relative z-10">
                                Wyloguj się
                            </span>
                        </button>
                        <NuxtLink
                            to="/account/"
                            class="relative px-5 py-2 after:absolute after:bg-gray-100 after:shadow-lg after:rounded-md after:inset-0 after:duration-150 after:opacity-0 hover:after:opacity-100 cursor-pointer whitespace-nowrap"
                        >
                            <span class="relative z-10">
                                Moje konto
                            </span>
                        </NuxtLink>
                    </div>
                </div>

                <button class="flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10">
                    <IconHeart/>
                </button>
                <button
                    @click="emits('openCart')"
                    :disabled="route === 'cart'"
                    class="flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 sm:px-4 h-10 w-10 sm:w-auto"
                >
                    <IconBasket/>
                    <span class="hidden sm:inline sm:ml-2">
                        {{ cart.sum.toFixed(2) }}&nbsp;zł
                    </span>
                </button>
                <button
                    @click="showMenu = true"
                    class="sm:hidden flex items-center justify-center bg-gray-900 text-white rounded-full ml-4 w-10 h-10"
                >
                    <IconMenu/>
                </button>
                <MobileMenu :showMenu="showMenu" @close="showMenu=false"/>
            </div>
        </div>
        <TheMenu/>
    </header>
</template>
<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const user = useSupabaseUser();
const route = useRoute().name;
const cart = useCartStore();
const emits = defineEmits(["openCart", "showLogin"]);
const showMenu = ref(false);
const supabase = useSupabaseClient();
async function signOut () {
    const { error } = await supabase.auth.signOut()
}
</script>