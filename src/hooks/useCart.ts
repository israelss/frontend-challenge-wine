import { useContext } from 'react'
import { CartContext } from '@contexts/cart'
import { CartContextType } from 'src/types/cart'

export const useCart = (): CartContextType => useContext<CartContextType>(CartContext)
