<template>
    <div
        v-for="{ variantGroup } in variantGroups"
        class=" text-gray-900"
    >
        <span class="block font-semibold">
            {{ variantGroup.name }}
        </span>
        <div class="flex flex-wrap py-1">
            <nuxt-link
                v-for="variant in variantGroup.variants"
                class="bg-gray-100 from-gray-200 to-indigo-200 rounded-full px-3 py-0.5 text-sm mr-1 last:mr-0 my-1 shadow-md"
                :to="`/products/${variant.product_id}`"
                :class="variant.product_id === productId ? 'bg-gradient-to-br ' : ''"
            >
                {{ variant.value }}
            </nuxt-link>
        </div>
    </div>
</template>
<script setup lang="ts">
    const { variantGroups, productId } = defineProps(["variantGroups", "productId"]);
</script>