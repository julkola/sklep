<template>
    <div class="flex">
        <NuxtLink
            to=""
            class="flex items-center justify-center rounded-full text-white bg-gray-900 shadow h-8 w-8 mr-2"
        >
            &laquo;
        </NuxtLink>
        <NuxtLink
            v-for="pageNum in [currentPage, maxPage]"
            to=""
            :class="pageNum === currentPage ? 'bg-gray-200' : ''"
            class="flex items-center justify-center rounded-full shadow h-8 w-8 mr-2"
        >
            {{ pageNum }}
        </NuxtLink>
        <NuxtLink
            to=""
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