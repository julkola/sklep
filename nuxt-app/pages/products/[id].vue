<template>
    <main class="text-gray-900">
        <div class="flex">
            <ProductGallery/>
            <div class="ml-4">
                <strong
                    v-if="product.price"
                    class="inline-block py-1 px-3 font-semibold rounded-md bg-emerald-100 text-teal-700"
                >
                    Promocja!
                </strong>
                <h1 class="text-xl font-bold">
                    {{ product!.name }}
                </h1>
                <TheVariants :productId="product.id" :variant-groups="product.variantGroups"/>

                <div class="flex flex-col items-end mt-4 mb-6 text-gray-900">
                    <span
                        v-if="product.price"
                        class="relative text-xl font-semibold after:absolute after:h-[3px] after:bg-indigo-400 after:bg-opacity-70 after:w-full after:-rotate-6 after:left-0 after:top-1/2"
                    >
                        {{ product.price.toFixed(2) }}&nbsp;zł
                    </span>
                    <span class="text-2xl font-bold">
                        {{ product.price.toFixed(2) }}&nbsp;zł
                    </span>
                </div>
                    

                <TheProductCartAdding :product-id="product.id" :max-quantity="product.available" :product-price="product.price"/>

                <div class="flex justify-end items-center mt-6">
                    <span>
                        Dodaj do obserwowanych
                    </span>
                    <button class="flex items-center justify-center ml-4 rounded-full w-9 h-9 text-gray-600 bg-gray-200">
                        <HeartIcon/>
                    </button>
                </div>
            </div>
        </div>
        <div class="">
            <p>
                {{ product.desc }}
            </p>
        </div>
    </main>
</template>
<script setup lang="ts">
const route = useRoute();
const { data: product, pending, error }  = await useFetch(`/api/product/${route.params.id}`);
</script>