<template>
    <div id="filters">
        <div v-for="filter in filters">
            <span>
                {{ filter.name }} {{ values.get(filter.groupId)?.size ?? "" }}
            </span>
            <div>
                <Checkbox
                    v-for="option in filter.options"
                    :id="`filter-${filter.groupId}-${option.id}`"
                    :text="option.name"
                    :modelValue="values"
                    @update:modelValue="(val: boolean) => updateFilters(val, option.id, filter.groupId)"
                />
            </div>
        </div>
        <button
            type="submit"
            class="sticky bottom-0 w-full mt-4 mb-2 rounded-full bg-gray-200 text-gray-900 shadow py-1 px-6"
        >
            Filtruj
        </button>
    </div>
</template>
<script setup lang="ts">
const idCategory = '1234';
const { data: filters } = await useFetch(`/api/filters/${idCategory}`);
const map: Map<string, Set<number>> = new Map();
const values = ref(map);

function updateFilters (v:boolean, opt:number, filterId:string) {
    if (!values.value.has(filterId)) values.value.set(filterId, new Set());
    if (v) values.value.get(filterId)!.add(opt);
    else values.value.get(filterId)!.delete(opt);
    if (values.value.get(filterId)!.size < 1) values.value.delete(filterId)
}
</script>