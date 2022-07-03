import { CartItem } from "src/types/cart"

export const sumQuantity = (items: Array<CartItem>) => {
  return items.reduce((total, { quantity }) => total + quantity, 0)
}
export const sumPrices = (items: Array<CartItem>) => {
  return items.reduce((total, { quantity, price }) => total + (quantity * price), 0)
}
export const modifyQuantity = (items: Array<CartItem>, id: number, amount: number) => {
  const updatedItems = items.map((item) => {
    if (item.id !== id) return item
    return { ...item, quantity: item.quantity + amount }
  })

  return updatedItems
}
