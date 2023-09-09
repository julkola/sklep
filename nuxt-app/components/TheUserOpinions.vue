<template>
    <h1 class="text-xl font-semibold">
        Moje opinie
    </h1>
    <div
        v-if="opinions?.length > 0"
        class="grid gap-4 py-4"
    >
        <div
            
            v-for="opinion in opinions"
            class="bg-white shadow-xl rounded-md px-6 py-4"
        >
            <div class="flex justify-between">
                <NuxtLink :to="`/products/${opinion.product.id}`" class="font-semibold">
                    {{ opinion.product.name }}
                </NuxtLink>
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
    </div>
    <span
        v-else
        class="inline-block mb-4 my-8 px-6 py-2 bg-slate-100 text-slate-700 rounded-lg shadow-lg shadow-slate-50"
    >
        Brak opini
    </span>
</template>
<script setup lang="ts">
const user = useSupabaseUser();
const email = ref( user && user.value ? user.value.email : "");

const client = await useSupabaseClient();
const { data: opinions, error } = await client
    .from('Opinions')
    .select(`
        author,
        created_at,
        rating,
        opinion,
        product: Product (
            id,
            name
        )
    `)
    .eq('user_id', user.value.id)

</script>