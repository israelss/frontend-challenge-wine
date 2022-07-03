export interface Filters {
  name: string
  range: number
}

export interface FilterContextType {
  setNameFilter: (name: string) => void
  setRangeFilter: (range: string) => void
}
