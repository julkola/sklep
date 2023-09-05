<template>
    <div class="flex">
        <NuxtLink
            to=""
            :disabled="currentPage === 1"
            class="flex items-center justify-center rounded-full text-white bg-gray-900 shadow h-8 w-8 mr-2"
        >
            &laquo;
        </NuxtLink>
        <input
            type="text"
            :value="currentPage"
            inputmode="numeric"
            class="text-center rounded-full shadow-inner bg-gray-50 h-8 w-16 mr-2"
        >
        <span class="flex items-center h-8 mr-4">
            z {{ maxPage }}
        </span>
        <NuxtLink
            to=""
            :disabled="currentPage === maxPage"
            class="flex items-center justify-center rounded-full text-white bg-gray-900 shadow h-8 w-8"
        >
            &raquo;
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
const { currentPage } = defineProps<{
    currentPage: number
    maxPage: number
}>();
</script>