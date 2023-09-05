<template>
    <div
        v-if="currentCategory"
        class=""
    >
        <NuxtLink
            v-if="currentCategory.parent"
            class="block"
            :to="`/products/?category=${currentCategory.parent.id}`"
        >
            {{ currentCategory.parent.name }}
        </NuxtLink>
        <span class="font-semibold">
            {{ currentCategory.name }}
        </span>
        <ul class="flex flex-col ml-4 list-none">
            <li
                v-for="subCategory in currentCategory.children"
                class=""
            >
                <NuxtLink :to="`/category/${subCategory.id}`">{{ subCategory.name }}</NuxtLink>
            </li>

        </ul>
    </div>
    <div
        v-else
        class=""
    >
        <ul class="flex flex-col ml-4 list-none">
            <li
                v-for="category in categories"
                class=""
            >
                <NuxtLink :to="`/category/${category.id}`">
                    {{ category.name }}
                </NuxtLink>
            </li>

        </ul>
    </div>
</template>
<script setup lang="ts">
const { currentCategory } = defineProps(["currentCategory"]);
const { data: categories, pending, error } = await useFetch("/api/category/main");
</script>