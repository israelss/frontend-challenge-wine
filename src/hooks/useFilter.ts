import { useContext } from 'react'
import { FilterContext } from '@contexts/filter'
import { FilterContextType } from 'src/types/filter'

export const useFilter = (): FilterContextType => useContext<FilterContextType>(FilterContext)
