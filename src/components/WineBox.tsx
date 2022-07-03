import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@hooks/useCart'
import WineIcon from './WineIcon'

const WineBox = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {
    cartItems,
    cartQuantity,
    cartTotal,
    addToCartItem,
    removeFromCart,
    removeFromCartItem
  } = useCart()

  return (
    <div>
      <div>
        <WineIcon onClick={() => setIsOpen(true)} id='cart-icon' />
        <div>{cartQuantity}</div>
      </div>
      {
        isOpen && (
          <div>
            <div>
              <span>Winebox ({cartQuantity})</span>
              <WineIcon onClick={() => setIsOpen(false)} id='close-icon' />
            </div>
            {cartQuantity === 0 && <h2>Você ainda não adicionou nenhum produto ao carrinho...</h2>}
            {
              cartQuantity > 0 && cartItems.map((item) => (
                <div key={item.id}>
                  <Image src={item.image} alt={item.name} width={70} height={110} />
                  <div>
                    <div>
                      <span>{item.name}</span>
                      <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </div>
                    <div>
                      <div>
                        <button onClick={() => removeFromCartItem(item.id)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addToCartItem(item.id)}>+</button>
                      </div>
                      <span>{item.price}</span>
                    </div>
                  </div>
                </div>
              ))
            }
            <div>Total: {cartTotal}</div>
          </div>
        )
      }
    </div>
  )
}

export default WineBox
