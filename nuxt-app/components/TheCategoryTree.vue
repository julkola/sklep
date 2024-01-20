<template>
    <div>
        <ul
            v-if="categoryTree.data.value"
            class="flex flex-col ml-4 list-none"
        >
            <li>
                <NuxtLink
                    v-for="ancestor in categoryTree.data.value.ancestors"
                    class="block"
                    :to="`/products/?category=${ancestor.id}`"
                >
                    {{ ancestor.name }}
                </NuxtLink>
            </li>
            <ul class="flex flex-col ml-4 list-none">
                <li v-for="category in categoryTree.data.value.currentLevel">
                    <NuxtLink
                        v-if="`${category.id}` !== currentCategoryId"
                        class="block"
                        :to="`/products/?category=${category.id}`"
                    >
                        {{ category.name }}
                    </NuxtLink>
    
                    <div v-else>
                        <span class="font-semibold" >
                            {{ category.name }}
                        </span>
                        <ul
                            v-if="categoryTree.data.value.children"
                            class="flex flex-col ml-4 list-none"
                        >
                            <li>
                                <NuxtLink
                                    v-for="child in categoryTree.data.value.children"
                                    class="block"
                                    :to="`/products/?category=${child.id}`"
                                >
                                    {{ child.name }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </ul>
        <div
            v-if="categoryTree.pending.value"
            class="relative"
        >
            <Loading />
        </div>
        <p
            v-if="categoryTree.error.value"
            class="relative"
        >
            {{ categoryTree.error.value?.message }}
        </p>
    </div>
</template>
<script setup lang="ts">
interface Category {
    id: string;
    name: string;
}
interface CatTree {
    ancestors?: Category[];
    currentLevel: Category[];
    children?: Category[];
}
const { currentCategoryId } = defineProps<{ currentCategoryId?: string }>();
const categoryTree = await useFetch<CatTree>("/api/category/tree", {
    query: {
        categoryId: computed(() => currentCategoryId),
    },
});
console.log('tree',categoryTree.data.value?.ancestors)

</script>