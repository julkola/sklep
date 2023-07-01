<template>
    <div id="filters">
        <div v-for="filter in filters">
            <span>{{ filter.name }} {{ filter.options.length }}</span>
            <div>
                <Checkbox
                    v-for="option in filter.options"
                    :id="`filter-${filter.groupId}-${option.id}`"
                    :text="option.name"
                    :modelValue="values"
                    @update:modelValue="(val) => updateFilters(val, option.id, filter.groupId)"
                />
            </div>
        </div>
        <span v-for="val in values.keys()">
            {{ val }} - <span v-for="setval in values.get(val)">{{ setval }},</span>
            <br>
        </span>
    </div>
</template>
<script setup lang="ts">
    interface filters {
        [index: number]: Set<number>
    }
    const {filters} = defineProps(["filters"]);
    const map: Map<number, Set<number>> = new Map();
    const values = ref(map);

    function updateFilters (v:boolean, opt:number, filterId:number) {
        if (!values.value.has(filterId)) values.value.set(filterId, new Set());
        if (v) values.value.get(filterId)!.add(opt);
        else values.value.get(filterId)!.delete(opt);
        if (values.value.get(filterId)!.size < 1) values.value.delete(filterId)
    }
</script>