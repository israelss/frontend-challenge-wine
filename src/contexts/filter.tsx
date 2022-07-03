import Router from 'next/router'
import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { FilterContextType } from 'src/types/filter'

const defaultState: FilterContextType = {
  setNameFilter: () => {},
  setRangeFilter: () => {}
}

export const FilterContext = createContext<FilterContextType>(defaultState)

export const FilterProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [nameFilter, setNameFilter] = useState('')
  const [rangeFilter, setRangeFilter] = useState('')

  const queryName = nameFilter.length > 0 ? `&name=${nameFilter}` : ''
  const queryFilter = rangeFilter.length > 0 ? `&filter=${rangeFilter}` : ''

  useEffect(() => {
    if (queryName.length > 0 || queryFilter.length > 0) {
      void Router.push(`/loja?page=1${queryName}${queryFilter}`)
    } else {
      const path = Router.pathname
      const { page, limit } = Router.query
      const queryPage = (Boolean(page) && page?.length !== 0) ? `&page=${JSON.stringify(page)}` : ''
      if (path.includes('/store/mobile')) {
        const queryLimit = (Boolean(limit) && limit?.length !== 0) ? `?limit=${JSON.stringify(limit)}` : ''
        void Router.push(`/loja/mobile${queryLimit}${queryPage}`)
      } else if (path.includes('/store')) {
        const queryLimit = (Boolean(limit) && limit?.length !== 0) ? `?limit=${JSON.stringify(limit)}` : ''
        void Router.push(`/loja${queryLimit}${queryPage}`)
      }
    }
  }, [queryFilter, queryName])

  const value = {
    setNameFilter,
    setRangeFilter
  }

  return (
    <FilterContext.Provider value={value}>
      {children}
    </FilterContext.Provider>
  )
}
