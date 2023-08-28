<template>
    <Transition name="cart">
        <div v-show="open" class="cart z-50" >
            <div
                @click="emits('close')"
                class="bg-black bg-opacity-60 inset-0 fixed cart-bg"
            >
            </div>
            <div class="cart-body w-full sm:w-auto fixed top-0 bottom-0 right-0 p-4">
                <div class="flex flex-col h-full py-4 px-6 sm:w-96 bg-white shadow-lg rounded-lg ">
                    <div class="flex items-center justify-between mb-4">
                        <span class="font-semibold">
                            Koszyk
                        </span>
                        <button @click="emits('close')" class="rounded-full w-8 h-8 shadow-lg">
                            &times
                        </button>
                    </div>
                    <div
                        v-if="cart.productsQuantity > 0"
                        class="flex-1 flex flex-col"
                    >
                        <FreeShippingProgressBar />
                        <div class="flex-1 overflow-y-auto">
                            <ProductInCart v-for="product in cart.products" :product="product"/>
                        </div>
                        <div class="text-right text-lg">
                            <p>Suma:</p>
                            <p class="font-bold">{{cart.sum.toFixed(2)}}</p>
                        </div>
                        <NuxtLink
                            to="/cart"
                            class="text-center bg-gray-900 disabled:bg-gray-200 disabled:text-gray-900 text-white rounded-full block my-4 py-1 px-6 shadow-lg"
                        >
                            Przejdź do koszyka
                        </NuxtLink>
                    </div>
                    <p
                        v-else
                        class="flex-1 flex justify-center items-center text-center text-xl font-semibold "
                    >
                        Brak produktów w koszyku
                    </p>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();

const { open } = defineProps(["open"]);
const emits = defineEmits(["close"]);

</script>
