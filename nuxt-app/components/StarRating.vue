<template>
    <div class="flex gap-1 items-center">
        <IconStarFull v-for="_ in fullStars"/>
        <IconStarHalf v-if="halfStar"/>
        <IconStarEmpty v-for="_ in emptyStars"/>
        <span class="font-bold">
            {{ roundedRating }}
        </span>
    </div>
</template>
<script setup lang="ts">
const { rating } = defineProps<{
    rating: number
}>();
const roundedRating = Math.round(rating*10) / 10;
const fullStars = Math.floor(roundedRating);
const halfStar = roundedRating - fullStars >= 0.5;
const emptyStars = (halfStar) ? Math.floor(5 - roundedRating) : Math.ceil(5 - roundedRating);
</script>