<template>
    <div class="lg:flex items-start px-4 py-4 ">
        <button
            @click="openFiltersMobile=true"
            class="lg:hidden fixed z-40 bottom-6 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 text-gray-900 shadow-lg py-1 px-6"
        >
            Filtry
        </button>
        <div
            class="fixed top-0 bottom-0 right-0 left-0 z-10 lg:z-0 lg:sticky lg:top-28 lg:w-60 lg:mr-4 px-6 py-4 bg-white rounded shadow-lg"
            :class="openFiltersMobile ? '' : 'hidden lg:block'"
        >
            <button
                @click="openFiltersMobile=false"
                class="md:hidden rounded-full w-8 h-8 shadow-lg"
            >
                &times
            </button>
            <TheCategoryTree
                :currentCategoryId="currentCategoryId"
                class="hidden lg:block"
            />
            <Filters
                v-if="currentCategory?.filters && currentCategory?.filters.length > 0"
                :currentCategory="currentCategory"
                class="mt-4"
            />
        </div>
        <div class="flex-1 ">
            <h1 class="font-bold text-xl mb-4" >
                {{ currentCategory ? currentCategory.name : "Produkty" }}
            </h1>
            <p
                class="mb-6"
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente aut, fugit rerum rem atque pariatur deleniti quibusdam porro voluptate libero quod inventore corrupti eos illum suscipit voluptatum eveniet impedit!
            </p>
            <TheProductsNotFound
                v-if="!prodcutsAreLoading && productError && productError.statusCode === 404"
            />
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
const openFiltersMobile = ref(false);
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