import { GetStaticProps, GetStaticPaths, GetStaticPropsContext } from 'next'
import { Product, ProductsApiReturn } from 'src/types/product'
import { useRouter } from 'next/router'
import ProductDetails from '@components/ProductDetails'

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow'
}

interface ProductDetailsType {
  product: Product
}

const Details = ({ product }: ProductDetailsType): JSX.Element => {
  const router = useRouter()

  if (router.isFallback) return <h1>Carregando detalhes do produto...</h1>

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: '0' } },
      { params: { pid: '1' } },
      { params: { pid: '2' } },
      { params: { pid: '3' } },
      { params: { pid: '4' } },
      { params: { pid: '5' } },
      { params: { pid: '6' } },
      { params: { pid: '7' } },
      { params: { pid: '8' } },
      { params: { pid: '9' } }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { pid } = params ?? {}

  if (pid === undefined) return { props: {} }

  const response = await fetch('https://wine-back-test.herokuapp.com/products', requestOptions)
  const products: ProductsApiReturn = await response.json()
  const product = products.items.find(({ id }: Product) => id === +pid)

  if (product == null) {
    return {
      redirect: {
        destination: '/loja',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 30
  }
}

export default Details
