<template>
    <div class="flex">
        <a href="" class="flex items-center justify-center rounded-full text-white bg-gray-900 shadow h-8 w-8 mr-2">
            &laquo;
        </a>
        <a
            v-for="pageNum in [currentPage, maxPage]"
            href=""
            :class="pageNum === currentPage ? 'bg-gray-200' : ''"
            class="flex items-center justify-center rounded-full shadow h-8 w-8 mr-2"
        >
            {{ pageNum }}
        </a>
        <a href="" class="flex items-center justify-center rounded-full text-white bg-gray-900 shadow h-8 w-8">
            &raquo;
        </a>
    </div>
</template>
<script setup lang="ts">
const { currentPage } = defineProps<{
    currentPage: number
    maxPage: number
}>();
</script>