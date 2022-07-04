import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Product } from 'src/types/product'
import { useCart } from '@hooks/useCart'
import Rating from './Rating'
import { StyledProductDetails } from 'src/styles/styledComponents'
import WineIcon from './WineIcon'

interface ProductDetailsProps {
  product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps): JSX.Element => {
  const { addToCart } = useCart()
  const [amount, setAmount] = useState(1)
  const router = useRouter()

  const handleBack = (): void => router.back()

  return (
    <StyledProductDetails>
      <div className='backButton' onClick={handleBack}>
        <WineIcon id="back-icon" width={32} height={32} />
        Voltar
      </div>
      <div className="productImage">
        <Image src={product.image} alt={product.name} width={381} height={579} />
      </div>
      <div className="details">
        <div className='breadcrumb'>
          <span className="level0">
            Vinhos
          </span>
          {'>'}
          <span className="level1">
            {product.country}
          </span>
          {'>'}
          {product.region}
        </div>
        <h1>{product.name}</h1>
        <div className='productInfo'>
          <span className='countryFlag'>
            <Image src={product.flag} alt={product.country} width={16} height={16} />
          </span>
          <span>{product.country}</span>
          <span>{product.type}</span>
          <span>{product.classification}</span>
          <span>{product.volume ?? product.size}</span>
          <Rating rating={product.rating} />
          <span>({product.avaliations ?? product.Rating})</span>
        </div>
        <div className='priceMember'>
          <span>R$</span> {product.priceMember.toFixed(2)}
          <div className='priceNonMember'>
            NÃO SÓCIO R$ {product.priceNonMember.toFixed(2)}/UN.
          </div>
        </div>
        <div className='sommelierComment'>
          <h3>Comentário do Sommelier</h3>
          <p>
            {product.sommelierComment}
          </p>
        </div>
        <div className='quantityButtons'>
          <div className={`minusButton ${amount < 2 && 'disabled'}`} onClick={() => setAmount(amount => amount === 1 ? amount : amount - 1)}>
            -
          </div>
          <span>{amount}</span>
          <div className='plusButton' onClick={() => setAmount(amount => amount + 1)}>
            +
          </div>
          <div className='addButton' onClick={() => addToCart(product.id, product.image, product.name, product.priceNonMember, amount)}>
            Adicionar
          </div>
        </div>
      </div>
    </StyledProductDetails>
  );
}

export default ProductDetails
