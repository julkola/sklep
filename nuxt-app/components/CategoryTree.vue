<template>
    <div id="category-tree">
        <NuxtLink class="block" :to="`/category/${currentCategory.parentCategory.id}`">
            {{ currentCategory.parentCategory.name }}
        </NuxtLink>
        <span class="font-semibold ml-2">{{ currentCategory.name }}</span>
        <div class="flex flex-col ml-4">
            <NuxtLink v-for="subCategory in currentCategory.subCategories" :to="`/category/${subCategory.id}`">{{ subCategory.name }}</NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const currentCategory = inject("currentCategoryData");
</script>