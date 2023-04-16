<template>
    <div class="fixed top-0 bottom-0 right-0 overflow-y-auto w-96 bg-white border-l-2 border-gray-900">
        <div class="flex justify-between border-b-2 border-gray-900">
            <span>Koszyk</span>
            <button @click="emits('closeCart')">X</button>
        </div>
        <div class="py-2 px-3">
            <div v-for="product in cart.products" class="flex items-stretch mb-4 last:mb-0 p-2 bg-gray-200">
                <img :src="product.id" :alt="product.id" class="w-16 h-16 bg-gray-600 rounded">
                <div class="flex-1 text-right">
                    <p>{{product.id}}</p>
                    <button @click="cart.removeFromCart(product.id)">x</button>
                    <div class="flex w-full">
                        <span class="flex-1">{{product.quantity}} x {{product.price}}zł</span>
                        <button @click="decrease(product)" class="rounded bg-zinc-700 text-white w-6 h-6">-</button>
                        <input type="text" inputmode="numeric" :value="product.quantity" class="rounded w-6 h-6 border-2 border-zinc-700 text-center">
                        <button :disabled="product.quantity === product.availability" @click="increase(product)" class="rounded bg-zinc-700 text-white w-6 h-6">+</button>
                        <span class="flex-1">{{(product.quantity*product.price).toFixed(2)}}zł</span>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="text-right">
            <p>Suma:</p>
            <p class="font-bold">{{cart.sum}}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();

interface ProductInCart {
    id: string,
    quantity: number,
    price: number,
    availability: number,
}

const emits = defineEmits(["closeCart"]);

function increase (product: ProductInCart) {
    if(product.quantity < product.availability) product.quantity++;
}
function decrease (product: ProductInCart) {
    if(product.quantity > 1) product.quantity--;
}
</script>