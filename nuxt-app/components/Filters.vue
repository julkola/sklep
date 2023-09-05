<template>
    <div id="filters">
        <div v-for="filter in filters">
            <span>
                {{ filter.name }} {{ values.get(filter.id)?.size ?? "" }}
            </span>
            <div>
                <Checkbox
                    v-for="option in filter.options"
                    :id="`filter-${filter.id}-${option.id}`"
                    :modelValue="values"
                    @update:modelValue="(val: boolean) => updateFilters(val, option.id, filter.id)"
                >
                    {{ option.value }}
                </Checkbox>
            </div>
        </div>
        <button
            type="submit"
            class="sticky bottom-0 w-full mt-4 mb-2 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 shadow py-1 px-6"
            :disabled="!filterChanged"
        >
            Filtruj
        </button>
    </div>
</template>
<script setup lang="ts">
const {currentCategory} = defineProps(["currentCategory"]);
const filters = currentCategory.filters;
const map: Map<string, Set<number>> = new Map();
const values = ref(map);
const filterChanged = ref(false);

function updateFilters (v:boolean, opt:number, filterId:string) {
    if (!values.value.has(filterId)) values.value.set(filterId, new Set());
    if (v) values.value.get(filterId)!.add(opt);
    else values.value.get(filterId)!.delete(opt);
    if (values.value.get(filterId)!.size < 1) values.value.delete(filterId)
}
</script>