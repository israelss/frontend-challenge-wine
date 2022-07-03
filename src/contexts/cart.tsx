import { createContext, PropsWithChildren, useEffect, useState } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { CartContextType, CartItem } from 'src/types/cart'
import { modifyQuantity, sumPrices, sumQuantity } from '@utils/cart'

const defaultState: CartContextType = {
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
  addToCart: () => {},
  addToCartItem: () => {},
  removeFromCart: () => {},
  removeFromCartItem: () => {}
}

export const CartContext = createContext<CartContextType>(defaultState)

export const CartProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [cartQuantity, setCartQuantity] = useState<number>(0)
  const [cartTotal, setCartTotal] = useState<number>(0)
  const { storedValue: cartItems, setValue: setCartItems } = useLocalStorage<CartItem[]>('cartItems', [])

  useEffect(() => {
    setCartQuantity(sumQuantity(cartItems))
    setCartTotal(sumPrices(cartItems))
  }, [cartItems])

  const addToCart = (id: number, image: string, name: string, price: number, amount?: number): void => {
    const itemAlreadyAdded = cartItems.find((item) => item.id === id)
    const addAmount = amount ?? 1

    if (itemAlreadyAdded != null) return addToCartItem(id, addAmount)

    const newItem: CartItem = { id, image, name, quantity: addAmount, price }
    const updatedItems = Array.from(new Set([...cartItems, newItem]))
    setCartItems(updatedItems)
  }

  const addToCartItem = (id: number, amount?: number): void => {
    const addAmount = amount ?? 1
    const updatedItems = modifyQuantity(cartItems, id, addAmount)
    setCartItems(updatedItems)
  }

  const removeFromCart = (id: number): void => {
    const updatedItems = cartItems.filter((item) => item.id !== id)
    setCartItems(updatedItems)
  }

  const removeFromCartItem = (id: number): void => {
    const updatedItems = modifyQuantity(cartItems, id, -1)
    setCartItems(updatedItems.filter(({ quantity }) => quantity !== 0))
  }

  const value = {
    cartItems,
    cartQuantity,
    cartTotal,
    addToCart,
    addToCartItem,
    removeFromCart,
    removeFromCartItem
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
