<template>
    <ul>
        <li v-for="name in names">
            {{ name }}
        </li>
    </ul>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';
const cart = useCartStore();
const { data: names, pending, error} = await useFetch('/api/product/getNames', {
    query: {
        ids: cart.products.map(pr => pr.id)
    }
})
console.group(error.value)
</script>