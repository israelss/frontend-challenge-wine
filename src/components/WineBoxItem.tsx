import { useCart } from "@hooks/useCart"
import Image from "next/image"
import { StyledWineBoxItem } from "src/styles/styledComponents"
import { CartItem } from "src/types/cart"

interface WineBoxItemProps {
  item: CartItem
}

const WineBoxItem = ({ item }: WineBoxItemProps): JSX.Element => {
  const {
    addToCartItem,
    removeFromCart,
    removeFromCartItem
  } = useCart()
  return (
    <StyledWineBoxItem>
      <Image src={item.image} alt={item.name} width={130} height={110} />
      <div>
        <div>
          <span>{item.name}</span>
          <div className="removeItemButton" onClick={() => removeFromCart(item.id)}>Remover</div>
        </div>
        <div>
          <div className="quantityButtons">
            <div className="minusButton" onClick={() => removeFromCartItem(item.id)}>-</div>
            <span>{item.quantity}</span>
            <div className="plusButton" onClick={() => addToCartItem(item.id)}>+</div>
          </div>
          <div className="itemPrice">{item.price}</div>
        </div>
      </div>
    </StyledWineBoxItem>
  )
}

export default WineBoxItem
