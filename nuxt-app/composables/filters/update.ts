import { CheckFilter, FilterMap, FilterTypeEnum } from "~/types/filters";

export function updateFilters (
  checked: boolean,
  optionId: string | number,
  filterId: string,
  currentFilters: Ref<FilterMap>
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