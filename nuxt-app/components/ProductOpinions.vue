<template>
    <div class="grid gap-4 py-4">
        <div
            v-for="opinion in opinions"
            class="bg-white shadow-xl rounded-md px-6 py-4"
        >
            <div class="flex justify-between">
                <span class="font-semibold">
                    {{ opinion.author }}
                </span>
                <StarRating :rating="opinion.rating" />
            </div>
            <q class="block">
                {{ opinion.opinion }}
            </q>
            <time
                class="text-xs"
                :datetime="opinion['created_at']"
            >
                {{ (new Date(opinion['created_at'])).toLocaleDateString() }}
            </time>
        </div>
        <OpinionAdd
            :productId="productId"
            @addOpinion="(opinion) => { opinions?.push(opinion) }"
        />
    </div>
</template>
<script setup lang="ts">
const { productId } = defineProps<{
    productId: number
}>();
const { data: opinions, error, pending } = useFetch('/api/opinions/list', {
    query: {
        productId: productId
    }
})
</script>