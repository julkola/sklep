<template>
    <div id="filters">
        <div v-for="filter in categoryFilters">
            <span>
                {{ filter.name }} {{ (<CheckFilter>currentFilters.get(filter.id))?.values.size ?? "" }}
            </span>
            <div>
                <InputCheckbox
                    v-for="option in filter.options"
                    :id="`filter-${filter.id}-${option.id}`"
                    :value="currentFilters"
                    @update:value="(v:boolean) => update(v, option.id, filter.id)"
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
import { haveFiltersChanged } from "~/composables/filters/compare";
import { copyFilterMap } from "~/composables/filters/duplicate-map";
import { updateFilters } from "~/composables/filters/update";
import { CheckFilter, SliderFilter, FilterMap, FilterTypeEnum } from "~/types/filters";

const { categoryFilters } = defineProps(["categoryFilters"]);

const currentFilters: Ref<FilterMap> = ref(new Map());
const prevFilters: Ref<FilterMap> = ref(new Map(currentFilters.value));

const filtersChanged = ref(false);

function update (
    checked: boolean,
    optionId: string | number,
    filterId: string,
) {
    console.log(checked)
    updateFilters(checked, optionId, filterId, currentFilters)
}

watch(
    [ currentFilters, prevFilters ],
    () => filtersChanged.value = haveFiltersChanged(currentFilters.value, prevFilters.value),
    { deep: true }
)

function filter () {
    copyFilterMap(currentFilters, prevFilters);
}
</script>