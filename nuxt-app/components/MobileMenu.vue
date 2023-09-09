<template>
    <div
        class="sm:hidden fixed z-50 inset-0 bg-white"
        :class="showMenu ? '' : 'translate-x-full'"
    >
        <div class="flex items-center justify-between p-2">
            <div class="flex items-center">
                <IconMenu width="36" height="36" class="mr-2"/>
                Menu
            </div>
            <button @click="emit('close')" >
                <IconClose  width="28" height="28"/>
            </button>
        </div>
        <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Włosy</nuxt-link>
        <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Ciało</nuxt-link>
        <nuxt-link class="px-2 py-1 mr-4 last:mr-0 relative after:absolute after:h-1 after:bg-gray-900 after:rounded-full after:bottom-0 after:right-0 after:left-0 after:origin-left after:duration-150 after:scale-x-0 hover:after:scale-x-100 cursor-pointer">Twarz</nuxt-link>
    </div>
</template>
<script setup lang="ts">
const { showMenu } = defineProps<{
    showMenu:boolean,
}>();
const emit = defineEmits(["close"]);
</script>