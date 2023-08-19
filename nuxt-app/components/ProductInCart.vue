<template>
    <div class="flex items-stretch mb-4 last:mb-0 p-2 bg-gray-200">
        <img :src="product.id" :alt="product.id" class="w-16 h-16 bg-gray-600 rounded">
        <div class="flex-1 text-right">
            <p>{{product.name}}</p>
            <button @click="cart.removeFromCart(product.id)">&times;</button>
            <span class="block">{{product.price}}zł</span>
            <div class="flex w-full">
                <button @click="decrease(product)" class="rounded-full shadow-lg w-6 h-6">-</button>
                <span class="px-2">
                    {{ product.quantity }}
                </span>
                <button
                    :disabled="product.quantity === product.availability"
                    @click="increase(product)"
                    class="rounded-full shadow-lg w-6 h-6"
                >
                    +
                </button>
                <span class="flex-1 font-semibold">
                    {{(product.quantity*product.price).toFixed(2)}}zł
                </span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const { product } = defineProps(["product"]);
const cart = useCartStore();
function increase (product: ProductInCart) {
    if(product.quantity < product.availability) product.quantity++;
}
function decrease (product: ProductInCart) {
    if(product.quantity > 1) product.quantity--;
}
</script>