import { FilterMap, FilterTypeEnum } from "~/types/filters";

export function copyFilterMap (currentFilters: Ref<FilterMap>, prevFilters: Ref<FilterMap>) {
  prevFilters.value.clear();
  for(const [k, f] of currentFilters.value.entries()) {
    if (f.type === FilterTypeEnum.checks) {
      prevFilters.value.set(k, {
        type: f.type,
        values: new Set(f.values)
      });
    } else {
      prevFilters.value.set(k, {
        type: f.type,
        min: f.min,
        max: f.max
      })
    }
  }
}