<template>
    <div class="flex">
        <div class="flex flex-col h-full">
            <img v-for="photo in photos" :src="photo" :alt="photo" class="object-contain w-36 h-36 bg-gray-300 rounded mb-4 last:mb-0">
        </div>
        <div class="overflow-hidden w-96 ml-4">
            <div class="flex h-full max-w-none">
                <img v-for="photo in photos" :src="photo" :alt="photo" class="flex-none object-contain w-96 bg-gray-300 rounded">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const photos = [
        'dada',
        'caca',
        'baca'
    ]
</script>