import Router from 'next/router'
import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { ProductsApiReturn } from 'src/types/product'
import { useWindowSize } from '@hooks/useWindowSize'
import Paginator from '@components/Paginator'
import ProductCard from '@components/ProductCard'
import RangeFilter from '@components/RangeFilter'
import { API_URL, validateQueryItem } from '@utils/store'
import { StyledProductList, StyledStore } from 'src/styles/styledComponents'

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
  const { isMobile } = useWindowSize()

  useEffect(() => {
    if (isMobile) void Router.push(`/loja/mobile${queryName}${queryFilter}`)
  }, [isMobile, queryFilter, queryName])

  if (products.totalItems === 0) {
    return (
      <div>
        <RangeFilter />
        <h1>Nenhum produto foi encontrado. Tente com outros filtros...</h1>
      </div>
    )
  }

  return (
    <StyledStore>
      <RangeFilter />
      <div>
        <div className='totalFound'>{products.totalItems} produtos encontrados</div>
        <StyledProductList>
          {
            products.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </StyledProductList>
        <Paginator
          mobile={false}
          itemsPerPage={products.itemsPerPage}
          page={products.page}
          totalItems={products.totalItems}
          totalPages={products.totalPages}
          queryName={queryName}
          queryFilter={queryFilter}
        />
      </div>
    </StyledStore>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=60'
  )

  const { page, name, filter } = query

  const validatedFilter = validateQueryItem(filter)
  const validatedName = validateQueryItem(name)
  const validatedPage = validateQueryItem(page)

  const queryFilter = validatedFilter.length > 0 ? `&filter=${validatedFilter}` : ''
  const queryName = validatedName.length > 0 ? `&name=${validatedName}` : ''
  const queryPage = validatedPage.length > 0 ? `&page=${validatedPage}` : '&page=1'

  const url = `${API_URL}?limit=9${queryPage}${queryName}${queryFilter}`
  const response = await fetch(url, requestOptions)
  const products: ProductsApiReturn = await response.json()

  if (products.items.length === 0) {
    return {
      redirect: {
        destination: '/loja',
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
