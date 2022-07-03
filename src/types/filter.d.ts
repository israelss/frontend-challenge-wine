export type Filters = {
  name: string;
  range: number;
}

export type FilterContextType = {
  setNameFilter: (name: string) => void;
  setRangeFilter: (range: string) => void;
}
