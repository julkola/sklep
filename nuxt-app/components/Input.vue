<template>
    <div class="relative mt-6">
        <label
            :for="name"
            class="absolute top-0 -translate-y-1/2 mx-5 bg-white leading-tight font-semibold"
        >
            <slot/>
            <span v-if="required" class="text-teal-400">
                *
            </span>
        </label>
        <input
            type="text"
            :id="name"
            :name="name"
            :required="required"
            :placeholder="placeholder"
            class="w-full px-6 pt-3 pb-2 shadow-inner rounded-xl"
        >
    </div>
</template>

<script setup lang="ts">
const { name, required } = defineProps<{
    name: string,
    placeholder: "",
    required: false
}>();
</script>