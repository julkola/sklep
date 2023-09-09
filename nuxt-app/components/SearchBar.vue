<template>
    <div class="hidden sm:block relative h-10">
        <input
            v-model="searchPhrase"
            type="text"
            class="h-10 rounded-full bg-gray-100 shadow-inner pl-4 pr-12"
        >
        <button class="absolute top-0 bottom-0 right-0 flex items-center justify-center bg-gray-900 text-white rounded-full w-10 h-10">
            <IconSearch/>
        </button>
        <div
            v-if="isActive"
            class="absolute top-full mt-2 border border-gray-50 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl py-4 px-6 h-40 w-96 z-40">
            {{ searchPhrase }}
        </div>
    </div>
</template>
<script setup lang="ts">
const searchPhrase = ref('');
const isActive = ref(false);

</script>