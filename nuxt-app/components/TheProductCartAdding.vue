<template>
    <div class="flex">
        <div class="relative">
            <button
                @click="decreaseQuantity"
                :disabled="addToCartQuantity === 1"
                class="absolute left-0 w-10 h-10 text-gray-900 font-semibold rounded-full disabled:opacity-50 after:absolute after:inset-1 after:rounded-full after:bg-gradient-to-br after:from-gray-200 after:to-indigo-200 after:opacity-0 disabled:after:hidden hover:after:opacity-100 focus-visible:after:opacity-100 after:duration-500 after:transition-opacity"
            >
                <span class="relative z-10">
                    -
                </span>
            </button>
            <input
                v-model="addToCartQuantity"
                type="text"
                inputmode="numeric"
                class="w-32 h-10 px-12 text-center bg-gray-100 shadow-inner rounded-full"
            >
            <button
                @click="increaseQuantity"
                :disabled="addToCartQuantity === maxQuantity"
                class="absolute right-0 w-10 h-10 text-gray-900 font-semibold rounded-full disabled:opacity-50 after:absolute after:inset-1 after:rounded-full after:bg-gradient-to-br after:from-gray-200 after:to-indigo-200 after:opacity-0 disabled:after:hidden hover:after:opacity-100 focus-visible:after:opacity-100 after:duration-500 after:transition-opacity"
            >
                <span class="relative z-10">
                    +
                </span>
            </button>
        </div>
        <button
            @click="addToCart"
            class="ml-6 flex-1 font-semibold bg-gradient-to-br from-gray-200 to-indigo-200 text-gray-900 rounded-full shadow-md"
        >
            Dodaj do koszyka
        </button>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cart = useCartStore();

const { maxQuantity, productId, productPrice } = defineProps<{
    maxQuantity: number,
    productId: string,
    productPrice: number
}>();
const productInCart = cart.getProduct(`${productId}`);
const addToCartQuantity = productInCart ? ref(productInCart.quantity) : ref(1);

function increaseQuantity () {
    if (addToCartQuantity.value < maxQuantity) addToCartQuantity.value++;
}
function decreaseQuantity () {
    if (addToCartQuantity.value > 1) addToCartQuantity.value--;
}
watchEffect(()=>{
    if (+addToCartQuantity.value < 1) addToCartQuantity.value = 1;
    else if (+addToCartQuantity.value > maxQuantity) addToCartQuantity.value = maxQuantity;
})
function addToCart() {
    cart.addToCart(`${productId}`, +addToCartQuantity.value, productPrice, maxQuantity)
}
</script>