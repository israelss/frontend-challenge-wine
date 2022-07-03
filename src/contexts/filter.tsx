import { validateQueryItem } from '@utils/store'
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
    const path = Router.pathname
    if (path.includes('/store/mobile')) {
      if (queryName.length > 0 || queryFilter.length > 0) {
        void Router.push(`/loja/mobile?${queryName}${queryFilter}`)
      } else {
        const { limit } = Router.query
        const validatedLimit = validateQueryItem(limit)
        const queryLimit = validatedLimit.length > 0 ? `&limit=${validatedLimit}` : ''
        void Router.push(`/loja/mobile${queryLimit}`)
      }
    } else if (path.includes('/store')) {
      if (queryName.length > 0 || queryFilter.length > 0) {
        void Router.push(`/loja?limit=9&page=1${queryName}${queryFilter}`)
      } else {
        const { page } = Router.query
        const validatedPage = validateQueryItem(page)
        const queryPage = validatedPage.length > 0 ? `&page=${validatedPage}` : '&page=1'
        void Router.push(`/loja?limit=9${queryPage}`)
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
