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
      <div className='cardContent'>
        <Link href={`/loja/vinho/${product.id}`} passHref>
          <a>
            <Image src={product.image} alt={product.name} width={128} height={178} />
            <h4>{product.name}</h4>
            <div className='discount'>
              <span className='fullPrice'>{product.price}</span>
              <span className='discountTag'>{product.discount}% OFF</span>
            </div>
            <div className='priceMember'>
              <div className='priceMemberTag'>SÓCIO WINE</div>
              <div className='priceMemberValue'><span>R$</span>{product.priceMember.toFixed(2)}</div>
            </div>
            <div className='priceNonMember'>
              NÃO SÓCIO R$ {product.priceNonMember.toFixed(2)}
            </div>
          </a>
        </Link>
      </div>
      <div className='cardButton' onClick={() => addToCart(product.id, product.image, product.name, product.priceNonMember)}>
        Adicionar
      </div>
    </StyledProductCard>
  )
}

export default ProductCard
