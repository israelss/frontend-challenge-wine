import Router from "next/router";
import { createContext, PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { FilterContextType } from "src/types/filter";

const defaultState: FilterContextType = {
  setNameFilter: () => {},
  setRangeFilter: () => {},
}

export const FilterContext = createContext<FilterContextType>(defaultState)

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [nameFilter, setNameFilter] = useState('')
  const [rangeFilter, setRangeFilter] = useState('')

  const queryName = nameFilter ? `&name=${nameFilter}` : ''
  const queryFilter = rangeFilter ? `&filter=${rangeFilter}` : ''

  useEffect(()=> {
    if (queryName || queryFilter) {
      Router.push(`/loja?page=1${queryName}${queryFilter}`)
    } else if (Router.pathname.includes('/store')) {
      const { page, limit } = Router.query
      const queryLimit = limit ? `?limit=${limit}` : ''
      const queryPage = page ? `&page=${page}` : ''
      Router.push(`/loja${queryLimit}${queryPage}`)
    }
  }, [queryFilter, queryName])

  const value = {
    setNameFilter,
    setRangeFilter,
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
