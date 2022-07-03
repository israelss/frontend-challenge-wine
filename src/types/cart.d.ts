export type CartItem = {
  id: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}

export type CartContextType = {
  cartItems: Array<CartItem>;
  cartQuantity: number;
  cartTotal: number;
  addToCart: (id: number, image: string, name: string, price: number, amount?: number) => void;
  addToCartItem: (id: number, amount?: number) => void;
  removeFromCart: (id: number) => void;
  removeFromCartItem: (id: number) => void;
}
