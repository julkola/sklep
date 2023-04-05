<template>
    <div id="filters"></div>
    <div class="flex flex-wrap px-4 py-4">
        <div v-for="product in products" class=" mr-4 mb-4 w-52 flex flex-col">
            <div class="w-52 h-52 relative">
                <img :src="`/products/${product.id}.jpg`" :alt="product.name" class="w-52 h-52 bg-gray-300 rounded ">
                <button @click="cart.addToCart(product.id,1,product.price,product.available)" class="rounded-full bg-gray-900 shadow text-white w-8 h-8 flex justify-center items-center absolute bottom-3 right-3">
                    <BasketIcon/>
                </button>
            </div>
            <p class="text-sm">{{ product.name }}</p>
            <p class="text-right mt-2 font-semibold flex-1 flex items-end justify-end">
                {{ product.price.toFixed(2) }}zł
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cart = useCartStore();
const products = useFetch(`/api/product`).data
</script>