<template>
    <div class="lg:flex items-start px-4 py-4 ">
        <div class="w-60 mr-4 px-6 py-4 rounded shadow-lg">
            <TheCategoryTree :currentCategory="currentCategory" />
            <Filters
                v-if="currentCategory?.filters.length > 0"
                :currentCategory="currentCategory"
                class="mt-4"
            />
        </div>
        <div class="flex-1 ">
            <h1
                :key="currentCategoryId"
                class="font-bold text-xl mb-4"
            >
                {{ currentCategory ? currentCategory.name : "Produkty" }}
            </h1>
            <p
                class="mb-6"
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente aut, fugit rerum rem atque pariatur deleniti quibusdam porro voluptate libero quod inventore corrupti eos illum suscipit voluptatum eveniet impedit!
            </p>
            <TheProductsNotFound v-if="!prodcutsAreLoading &&productError && productError.statusCode === 404" />
            <TheProductListSkeleton v-if="false" />
            <TheProductList
                v-if="products"
                :products="products"
            />
            <ListFooter
                v-if="products"
                :page="routeQuery.page ? +routeQuery.page : 1"
                :perPage="routeQuery.perPage ? +routeQuery.perPage : 10"
                :allOfferCount="products.length"
            />

        </div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const routeQuery = route.query;

const currentCategoryId = computed( () => useRouter().currentRoute.value.query.category?.toString());

const { data: currentCategory, error, pending } = await useFetch(`/api/category/list`, {
    query: {
        categoryId: currentCategoryId,
    }
});
const { data: products, error: productError, pending: prodcutsAreLoading } = await useFetch(`/api/product`, {
    query: {
        categoryId: currentCategoryId,
        producerId: null
    }
});
</script>