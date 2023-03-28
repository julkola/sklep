<template>
    <main class="text-gray-900">
        <div class="flex">
            <ProductGallery/>
            <div class="ml-4">
                <h1 class="text-lg font-bold">{{ product!.name }}</h1>
                <p>{{ product!.desc }}</p>
                <div class="flex flex-wrap py-1">
                    <nuxt-link
                        v-for="variant in product!.variants"
                        class="border-gray-900 border-2 rounded-full px-3 text-sm mr-1 last:mr-0 my-1"
                        :disabled="variant.id === product!.id"
                        :to="variant.id"
                        :class="variant.id === product!.id ? 'bg-gray-900 text-white' : ''"
                    >
                        {{ variant.variantName }}
                    </nuxt-link>
                </div>
                <div class="flex">
                    <div class="relative">
                        <button @click="decreaseQuantity" :disabled="addToCartQuantity === 1" class="absolute left-0 w-8 h-8 bg-gray-400 text-white rounded-full">-</button>
                        <input v-model="addToCartQuantity" type="text" inputmode="numeric" class="w-32 h-8 px-12 text-center border-2 border-gray-900 rounded-full">
                        <button @click="increaseQuantity" :disabled="addToCartQuantity === product!.available" class="absolute right-0 w-8 h-8 bg-gray-400 text-white rounded-full">+</button>
                    </div>
                    <button @click="addToCart" class="flex-1 bg-gray-900 text-white rounded-full">
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cart = useCartStore();
const route = useRoute();
const { data: product} = useFetch(`/api/product/${route.params.id}`)
const productInCart = cart.getProduct(product.id);
const addToCartQuantity = productInCart ? ref(productInCart.quantity) : ref(1);
function increaseQuantity () {
    if (addToCartQuantity.value < product.available) addToCartQuantity.value++;
}
function decreaseQuantity () {
    if (addToCartQuantity.value > 1) addToCartQuantity.value--;
}
watchEffect(()=>{
    if (addToCartQuantity.value < 1) addToCartQuantity.value = 1;
    else if (addToCartQuantity.value > product.available) addToCartQuantity.value = product.available;
})
function addToCart() {
    cart.addToCart(product.id, addToCartQuantity.value, product.price, product.available)
}
</script>