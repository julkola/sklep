<template>
    <div class="flex justify-center sm:justify-between pt-4 mt-4 border-t border-gray-900">
        <Select
            class="hidden sm:block"
            :options="options"
            :selectName="'sort'"
            :value="''"
            :label="'Sortowanie'"
        />
        <div class="hidden sm:block">
            {{ perPage*(page-1) + 1 }}-{{ lastOfferOnPageIfPageFull > allOfferCount ? allOfferCount : lastOfferOnPageIfPageFull }} / {{ allOfferCount }}
        </div>
        <ThePagination :currentPage="page" :maxPage="maxPage" />
    </div>
</template>
<script setup lang="ts">
const { perPage, page, allOfferCount } = defineProps<{
    perPage: number,
    page: number,
    allOfferCount: number
}>();
const lastOfferOnPageIfPageFull = perPage*page;
const maxPage = Math.ceil(allOfferCount / perPage);

const options = new Map([
    [
        "",
        "Domyślnie"
    ],
    [
        "price_asc",
        "Od najtańszych"
    ],
    [
        "price_desc",
        "Od najdroższych"
    ],
])
</script>