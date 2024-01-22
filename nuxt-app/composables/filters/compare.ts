import { CheckFilter, SliderFilter, FilterMap, isCheck, isSlider } from "~/types/filters";

function compareCheckFilters(currentFilter: CheckFilter, prevFilter: CheckFilter): boolean {
  const currentSet = currentFilter.values;
  const prevSet = prevFilter.values;

  console.log(currentSet, prevSet)
  if (currentSet.size !== prevSet.size) return true;

  for (const value of currentSet.values()) {
    if (!prevSet.has(value)) return true;
  }

  return false
}

function compareSliderFilters(currentFilter: SliderFilter, prevFilter: SliderFilter): boolean {
  return currentFilter.max !== prevFilter.max || currentFilter.min !== prevFilter.min;
}

export function haveFiltersChanged(currentFilters: FilterMap, prevFilters: FilterMap): boolean {
  if (currentFilters.size !== prevFilters.size) return true;
  console.log(currentFilters, prevFilters)
  
  for (const [key, currentFilter] of currentFilters.entries()) {
      const prevFilter = prevFilters.get(key);
      if (!prevFilter) return true;
      
      if (isCheck(prevFilter) && isCheck(currentFilter)) {
        return compareCheckFilters(currentFilter, prevFilter);
      } else if (isSlider(prevFilter) && isSlider(currentFilter)) {
        return compareSliderFilters(currentFilter, prevFilter);
      } else {
        console.error("Slider and checkbox cannot be compared");
        return true;
      }
  }

  return false;
}