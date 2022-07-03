import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { ProductsApiReturn } from 'src/types/product'
import { useWindowSize } from '@hooks/useWindowSize'
import Paginator from '@components/Paginator'
import ProductCard from '@components/ProductCard'
import { API_URL, validateQueryItem } from '@utils/store'

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow'
}

interface StoreProps {
  products: ProductsApiReturn
  queryFilter: string
  queryName: string
}

const Store = ({ products, queryFilter, queryName }: StoreProps): JSX.Element => {
  const { isMobile, width } = useWindowSize()

  useEffect(() => {
    if (!isMobile && width !== undefined) void Router.push(`/loja${queryName}${queryFilter}`)
  }, [isMobile, width, queryFilter, queryName])

  if (products.totalItems === 0) {
    return (
      <div>
        <h1>Nenhum produto foi encontrado. Tente com outros filtros...</h1>
      </div>
    )
  }

  return (
    <div>
      <div className='totalFound'>{products.totalItems} produtos encontrados</div>
      {
        products.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      <Paginator
        mobile
        itemsPerPage={products.itemsPerPage}
        page={products.page}
        totalItems={products.totalItems}
        totalPages={products.totalPages}
        queryName={queryName}
        queryFilter={queryFilter}
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=60'
  )

  const { page, name, filter, limit } = query

  const validatedFilter = validateQueryItem(filter)
  const validatedLimit = validateQueryItem(limit)
  const validatedName = validateQueryItem(name)
  const validatedPage = validateQueryItem(page)

  const queryFilter = validatedFilter.length > 0 ? `&filter=${validatedFilter}` : ''
  const queryLimit = validatedLimit.length > 0 ? `&limit=${validatedLimit}` : 'limit=8'
  const queryName = validatedName.length > 0 ? `&name=${validatedName}` : ''
  const queryPage = validatedPage.length > 0 ? `&page=${validatedPage}` : '&page=1'

  const url = `${API_URL}?${queryLimit}${queryPage}${queryName}${queryFilter}`
  const response = await fetch(url, requestOptions)
  const products: ProductsApiReturn = await response.json()

  if (products.items.length === 0) {
    return {
      redirect: {
        destination: '/loja/mobile',
        permanent: false
      }
    }
  }

  return {
    props: {
      products,
      queryFilter,
      queryName
    }
  }
}

export default Store
