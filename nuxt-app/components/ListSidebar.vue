<template>
    <div class="w-60 mr-4 px-6 py-4 rounded shadow-lg">
        <CategoryTree v-if="showCatTree" />
        <Filters />
    </div>
</template>
<script setup lang="ts">
const { showCatTree } = defineProps(["showCatTree"]);

</script>