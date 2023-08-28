<template>
    <div
        v-if="cart.productsQuantity > 0"
        class="flex-1 flex flex-col w-8/12 mx-auto my-6"
    >
        <h1 class="font-semibold text-2xl mb-6">
            Koszyk ({{ cart.products.length }})
        </h1>
        <div class="flex-1 overflow-y-auto">
            <ProductInCart v-for="product in cart.products" :product="product"/>
        </div>
        <div class="text-right my-6 flex flex-col">
            <span class=" text-lg">
                Suma:&nbsp
                <b class="font-bold">
                    {{cart.sum.toFixed(2)}}
                </b>
            </span>
            <span>
                Dostawa od:&nbsp;
                <b class="font-bold">
                    {{ minDeliveryCost }}
                </b>
            </span>
        </div>
        <FreeShippingProgressBar />
        <div class="text-right">
            <NuxtLink to="/order/delivery" class="bg-gray-900 disabled:bg-gray-200 disabled:text-gray-900 text-white rounded-full my-4 py-1 px-6 shadow-lg">
                Przejdź do dostawy
            </NuxtLink>
        </div>
    </div>
    <p
        v-else
        class="flex-1 flex justify-center items-center text-center text-xl font-semibold "
    >
        Brak produktów w koszyku
    </p>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();
const minDeliveryCost = 0;

const { data: names, pending, error} = await useFetch('/api/product/getNames', {
    query: {
        ids: cart.products.map(pr => pr.id)
    }
})
console.group(error.value)
</script>