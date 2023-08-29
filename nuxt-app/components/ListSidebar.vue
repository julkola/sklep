<template>
    <div class="w-60 mr-4 px-6 py-4 rounded shadow-lg">
        <CategoryTree v-if="showCatTree" />
        <Filters v-if="showFilters" />
    </div>
</template>
<script setup lang="ts">
const { showCatTree } = defineProps(["showCatTree"]);
const currentCategory = inject("currentCategoryData") as any;
const showFilters = currentCategory.value && currentCategory.value.filters.length > 0;
</script>