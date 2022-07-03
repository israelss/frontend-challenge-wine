import { useState } from 'react'
import { useCart } from '@hooks/useCart'
import WineIcon from './WineIcon'
import { StyledWineBox } from 'src/styles/styledComponents'
import WineBoxItem from './WineBoxItem'

const WineBox = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const {
    cartItems,
    cartQuantity,
    cartTotal
  } = useCart()

  return (
    <StyledWineBox>
      <div className='wineboxIcon'>
        <WineIcon onClick={() => setIsOpen(true)} id='cart-icon' className='cartIcon' />
        <div className='wineboxIndicator'>{cartQuantity}</div>
      </div>
      {
        isOpen && (
          <div className='openedWinebox'>
            <header>
              <h2>Winebox ({cartQuantity})</h2>
              <div className='wineboxTotal'>Total: R$ {cartTotal}</div>
              <WineIcon onClick={() => setIsOpen(false)} id='close-icon' className='closeCartIcon' />
            </header>
            <div className='wineboxBody'>
              {cartQuantity === 0 && <h2>Você ainda não adicionou nenhum produto ao carrinho...</h2>}
              {
                cartQuantity > 0 && cartItems.map((item) => (
                  <WineBoxItem key={item.id} item={item} />
                ))
              }
            </div>
          </div>
        )
      }
    </StyledWineBox>
  )
}

export default WineBox
