export enum FilterTypeEnum {
  number,
  checks
}

export interface SliderFilter {
  type: FilterTypeEnum.number,
  min: number,
  max: number
}

export interface CheckFilter {
  type: FilterTypeEnum.checks,
  values: Set<string | number>,
}

export type Filter = CheckFilter | SliderFilter;
export type FilterMap = Map<string, Filter>;

export function isSlider (filter: Filter): filter is SliderFilter {
  return filter.type === FilterTypeEnum.number;
}

export function isCheck (filter: Filter): filter is CheckFilter {
  return filter.type === FilterTypeEnum.checks;
}