<template>
    <div class="hidden sm:flex py-1 px-4 text-gray-900">
        <button
            v-for="category in categories"
            :key="category.id"
            class="group relative mr-4 last:mr-0 text-left"
        >
            <nuxt-link
                :to="`/products?category=${category.id}`"
                class=" block text-lg font-bold px-2 py-1 after:absolute after:h-1 after:bg-gradient-to-tr after:to-teal-500 after:from-indigo-700 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 group-hover:after:scale-x-100 cursor-pointer"
            >
                {{ category.name }}
            </nuxt-link>
            <div
                v-if="category.children.length > 0"
                class="hidden group-hover:flex group-focus-within:flex absolute top-full left-0 flex-col p-4 shadow-lg rounded-md bg-white"
            >
                <nuxt-link
                    v-for="subcategory in category.children"
                    :key="subcategory.id"
                    :to="`/products?category=${subcategory.id}`"
                    class="relative px-5 py-2 after:absolute after:bg-gray-100 after:shadow-lg after:rounded-md after:inset-0 after:duration-150 after:opacity-0 hover:after:opacity-100 cursor-pointer"
                >
                    <span class="relative z-10">
                        {{ subcategory.name }}
                    </span>
                </nuxt-link>
            </div>
        </button>
    </div>
</template>
<script setup lang="ts">
const { data:categories, error, pending } = await useFetch('/api/category/all');
</script>