<template>
    <main class="text-gray-900">
        <div class="flex">
            <ProductGallery/>
            <div class="ml-4 flex-1">
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

                <div class="flex justify-between">
                    <img
                        src=""
                        alt=""
                        width="110px"
                        height="60px"
                        class="object-contain bg-slate-200"
                    >
                    <StarRating :rating="product.rating"/>
                </div>
                <div class="flex flex-col items-end mt-4 mb-6 text-gray-900">
                    <span
                        v-if="product.price"
                        class="relative text-xl font-semibold after:absolute after:h-[3px] after:bg-indigo-400 after:bg-opacity-70 after:w-full after:-rotate-6 after:left-0 after:top-1/2"
                    >
                        {{ product.price?.toFixed(2) }}&nbsp;zł
                    </span>
                    <span class="text-2xl font-bold">
                        {{ product.price?.toFixed(2) }}&nbsp;zł
                    </span>
                </div>
                    
                <TheProductCartAdding
                    :product-id="`${product.id}`"
                    :max-quantity="product.available"
                    :product-price="product.price"
                />

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
            <div id="tabs" class="flex items-center justify-start">
                <button
                    @click="currentTab = 'description'"
                    :disabled="currentTab === 'description'"
                    class="relative px-4 py-2 disabled:after:scale-100 rounded after:scale-0 after:bottom-0 after:h-1 after:inset-x-0 after:bg-gradient-to-br after:from-gray-200 after:to-indigo-200 after:absolute after:rounded-full after:duration-200 after:transition-transform after:ease-out"
                >
                    Opis
                </button>
                <button
                    @click="currentTab = 'opinions'"
                    :disabled="currentTab === 'opinions'"
                    class="relative px-4 py-2 disabled:after:scale-100 rounded after:scale-0 after:bottom-0 after:h-1 after:inset-x-0 after:bg-gradient-to-br after:from-gray-200 after:to-indigo-200 after:absolute after:rounded-full after:duration-200 after:transition-transform after:ease-out"
                >
                    Opinie
                </button>
                <button
                    @click="currentTab = 'inci'"
                    :disabled="currentTab === 'inci'"
                    class="relative px-4 py-2 disabled:after:scale-100 rounded after:scale-0 after:bottom-0 after:h-1 after:inset-x-0 after:bg-gradient-to-br after:from-gray-200 after:to-indigo-200 after:absolute after:rounded-full after:duration-200 after:transition-transform after:ease-out"
                >
                    Skład
                </button>
            </div>
            <p v-show="currentTab === 'description'">
                {{ product.desc }}
            </p>
            <ProductOpinions  v-show="currentTab === 'opinions'" :product-id="product.id"/>
            <p v-show="currentTab === 'inci'">
                {{ product.inci }}
            </p>
        </div>
    </main>
    <div
        v-if="pending"
        class="px-6 py-4 bg-black bg-opacity-50 fixed inset-0"
    >
        Loading...
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
const product = ref();
const { data: response, pending, error }  = await useLazyFetch(() => `/api/product/${route.params.id}`);
product.value = response.value?.data;
const currentTab = ref("description");
</script>