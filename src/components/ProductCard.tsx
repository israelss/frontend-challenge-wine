import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '@hooks/useCart'
import { Product } from 'src/types/product'
import { StyledProductCard } from 'src/styles/styledComponents'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const { addToCart } = useCart()

  return (
    <StyledProductCard className='productCard'>
      <Link href={`/loja/vinho/${product.id}`} passHref>
        <a>
          <Image src={product.image} alt={product.name} width={115} height={176} />
          <div>{product.name}</div>
          <div>
            <span>{product.price}</span>
            <span>{product.discount}</span>
          </div>
          <div>
            <span>SÓCIO WINE</span>
            <span>{product.priceMember}</span>
          </div>
          <div>NÃO SÓCIO {product.priceNonMember}</div>
        </a>
      </Link>
      <button onClick={() => addToCart(product.id, product.image, product.name, product.priceNonMember)}>
        Adicionar
      </button>
    </StyledProductCard>
  )
}

export default ProductCard
