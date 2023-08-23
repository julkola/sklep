<template>
    <div class="relative">
        <input
            type="checkbox"
            :name="name"
            :id="name"
            class="absolute scale-0 peer"
        >
        <label :for="name" class="relative block h-8 w-14 p-1 bg-gray-300 rounded-full cursor-pointer peer-checked:bg-green-200 transition-colors duration-200 ease-out after:block after:w-6 after:h-6 after:rounded-full after:bg-gray-900 peer-focus-visible:outline peer-checked:after:translate-x-6 peer-checked:after:bg-emerald-700 after:duration-200 after:ease-out after:transition-[transform,background-color]">
        </label>
    </div>
</template>
<script setup lang="ts">
    const { name } = defineProps<{
        name: string
    }>();
</script>