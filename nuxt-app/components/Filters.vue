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
    </div>
</template>
<script setup lang="ts">
const filters = [
{
    groupId: "1",
    name: "Działanie",
    options: [
        {
            id: 13432,
            name: "Nawilżające"
        },
        {
            id: 13433,
            name: "Oczyszczające"
        },
        {
            id: 13434,
            name: "Odżywcze"
        },
        {
            id: 13435,
            name: "Wygładzające"
        }
    ]
},
{
    groupId: "2",
    name: "Składniki aktywe",
    options: [
        {
            id: 43432,
            name: "Aloes"
        },
        {
            id: 43433,
            name: "Peptydy"
        },
        {
            id: 43434,
            name: "Proteiny"
        }
    ]
}
]

const map: Map<string, Set<number>> = new Map();
const values = ref(map);

function updateFilters (v:boolean, opt:number, filterId:string) {
    if (!values.value.has(filterId)) values.value.set(filterId, new Set());
    if (v) values.value.get(filterId)!.add(opt);
    else values.value.get(filterId)!.delete(opt);
    if (values.value.get(filterId)!.size < 1) values.value.delete(filterId)
}
</script>