<template>
    <div class="flex px-4 py-4 ">
        <div class="w-60 mr-4 px-6 py-4 rounded shadow-lg">
            <div id="category-tree">
                <span class="font-semibold">{{ currentCategory.name }}</span>
                <div class="flex flex-col">
                    <NuxtLink v-for="subCategory in currentCategory.subCategories" :to="`/category/${subCategory.id}`">{{ subCategory.name }}</NuxtLink>
                </div>
            </div>
            <Filters :filters="filters" />
        </div>
        <div class="flex-1 ">
            <h1 class="font-bold text-xl mb-4">{{ currentCategory.name }}</h1>
            <p class="mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente aut, fugit rerum rem atque pariatur deleniti quibusdam porro voluptate libero quod inventore corrupti eos illum suscipit voluptatum eveniet impedit!</p>
            <div class="flex flex-wrap">
                <div v-for="product in products" class=" mr-4 mb-4 w-52 flex flex-col">
                    <div class="w-52 h-52 relative">
                        <img :src="`/products/${product.id}.jpg`" :alt="product.name" class="w-52 h-52 bg-gray-300 rounded ">
                        <button @click="cart.addToCart(product.id,1,product.price,product.available)" class="rounded-full bg-gray-900 shadow text-white w-8 h-8 flex justify-center items-center absolute bottom-3 right-3">
                            <BasketIcon/>
                        </button>
                    </div>
                    <NuxtLink :to="`/products/${product.id}`" class="text-sm">{{ product.name }}</NuxtLink>
                    <p class="text-right mt-2 font-semibold flex-1 flex items-end justify-end">
                        {{ product.price.toFixed(2) }}zł
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useCartStore } from '~~/stores/cart';

const cart = useCartStore();
const products = await useFetch(`/api/product`).data;

const currentCategory = {
    id: 52432,
    name: "Do kąpieli",
    subCategories: [
        {
            id: 43430,
            name: "Kule do kąpieli",
        },
        {
            id: 43431,
            name: "Sole do kąpieli",
        }
    ]
}

const filters = [
    {
        groupId: "1",
        name: "Działanie",
        options: [
            {
                id: 13432,
                name: "Nawilżające"
            },
            {
                id: 13433,
                name: "Oczyszczające"
            },
            {
                id: 13434,
                name: "Odżywcze"
            },
            {
                id: 13435,
                name: "Wygładzające"
            }
        ]
    },
    {
        groupId: "2",
        name: "Składniki aktywe",
        options: [
            {
                id: 43432,
                name: "Aloes"
            },
            {
                id: 43433,
                name: "Peptydy"
            },
            {
                id: 43434,
                name: "Proteiny"
            }
        ]
    }
]
</script>