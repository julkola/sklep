<template>
    <div id="filters">
        <div v-for="filter in categoryFilters">
            <span>
                {{ filter.name }} {{ getFilterSize(filter.id)}}
            </span>
            <div>
                <InputCheckbox
                    v-for="option in filter.options"
                    :id="`filter-${filter.id}-${option.id}`"
                    :value="currentFilters"
                    @update:modelValue="(val: boolean) => updateFilters(val, option.id, filter.id)"
                >
                    {{ option.value }}
                </InputCheckbox>
            </div>
        </div>
        <button
            type="button"
            class="sticky bottom-0 w-full mt-4 mb-2 rounded-full bg-gradient-to-br from-gray-200 to-indigo-200 disabled:bg-gray-200 disabled:bg-none text-gray-900 shadow py-1 px-6"
            @click="filter()"
            :disabled="!filtersChanged"
        >
            Filtruj
        </button>
    </div>
</template>
<script setup lang="ts">
enum FilterTypeEnum {
    number,
    checks
}

interface SliderFilter {
    type: FilterTypeEnum.number,
    min: number,
    max: number
}

interface CheckFilter {
    type: FilterTypeEnum.checks,
    values: Set<string | number>,
}

type Filter = CheckFilter | SliderFilter;
type FilterMap = Map<string, Filter>;

const { categoryFilters } = defineProps(["categoryFilters"]);

const currentFilters: Ref<FilterMap> = ref(new Map());

const prevFilters: FilterMap = currentFilters.value;

const filtersChanged: ComputedRef<boolean> = computed(() => currentFilters.value === prevFilters);

function getFilterSize (filterId: string) {
    const filter = currentFilters.value.get(filterId) as CheckFilter;
    if (!filter) return "";
    return filter.values.size;
}
function updateFilters (
    checked: boolean,
    optionId: string | number,
    filterId: string
) {
    const filter: CheckFilter | undefined = currentFilters.value.get(filterId) as CheckFilter;
    if (filter) {
        if (checked) {
            filter.values.add(optionId);
        } else {
            filter.values.delete(optionId);
            if (filter.values.size < 1) {
                currentFilters.value.delete(filterId)
            }
        }
    } else {
        const newFilter: CheckFilter = {
            type: FilterTypeEnum.checks,
            values: new Set([optionId]),
        }
        currentFilters.value.set(filterId, newFilter);
    }
}
function filter () {
    console.log(currentFilters.value);
}
</script>