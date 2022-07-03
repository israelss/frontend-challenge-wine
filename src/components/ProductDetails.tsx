import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Product } from 'src/types/product'
import { useCart } from '@hooks/useCart';
import Rating from './Rating';

type ProductDetailsProps = {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { addToCart } = useCart()
  const [amount, setAmount] = useState(1)
  const router = useRouter()
  return (
    <div>
      <button onClick={router.back}>
        {"<"} Voltar
      </button>
      <div>
        Vinhos {">"} { product.country } {">"} { product.region }
      </div>
      <h1>{ product.name }</h1>
      <Image src={product.image} alt={product.name} width={381} height={579} />
      <div>
        <span><Image src={product.flag} alt={product.country} width={16} height={16} /></span>
        <span>{ product.country }</span>
        <span>{ product.type }</span>
        <span>{ product.classification }</span>
        <span>{ product.volume || product.size }</span>
        <Rating rating={ product.rating } />
        <span>({ product.avaliations || product.Rating })</span>
      </div>
      <div>
        { product.priceMember }
      </div>
      <div>
        NÃO SÓCIO R$ { product.priceNonMember }/UN.
      </div>
      <div>
        <h3>Comentário do Sommelier</h3>
        <p>
          { product.sommelierComment }
        </p>
      </div>
      <div>
        <button disabled={ amount < 2 } onClick={ () => setAmount(amount => amount - 1) }>-</button>
          <span>{ amount }</span>
        <button onClick={ () => setAmount(amount => amount + 1) }>+</button>
        <button onClick={ ()=> addToCart(product.id, product.image, product.name, product.priceNonMember, amount) }>
          Adicionar
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
