import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { ProductsApiReturn } from 'src/types/product';
import { useWindowSize } from '@hooks/useWindowSize';
import Paginator from '@components/Paginator';
import ProductCard from '@components/ProductCard';
import RangeFilter from '@components/RangeFilter';

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow'
};

type StoreProps = {
  products: ProductsApiReturn;
  queryFilter: string;
  queryName: string;
}

const Store = ({ products, queryFilter, queryName }: StoreProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (isMobile) Router.push(`/loja/mobile${queryName}${queryFilter}`)
  }, [isMobile, queryFilter, queryName])

  const checkMobile = useCallback(async () => {
    while(!width) await new Promise((resolve) => setTimeout(resolve, 50))
    setIsMobile(width <= 375)
  }, [width])

  useEffect(() => {
    checkMobile()
  }, [checkMobile])

  if (products.totalItems === 0) return (
    <div>
      <RangeFilter />
      <h1>Nenhum produto foi encontrado. Tente com outros filtros...</h1>
    </div>
  )

  return (
    <div>
      <RangeFilter />
      <div>
        <div className='totalFound'>{products.totalItems} produtos encontrados</div>
        {
          products.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        }
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
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=30, stale-while-revalidate=60'
  )

  const { page, name, filter } = query
  const queryFilter = filter ? `&filter=${filter}` : ''
  const queryName = name ? `&name=${name}` : ''
  const queryPage = page ? `&page=${page}` : '&page=1'
  const url = `https://wine-back-test.herokuapp.com/products?limit=9${queryPage}${queryName}${queryFilter}`
  const response = await fetch(url, requestOptions)
  const products: ProductsApiReturn = await response.json()

  return {
    props: {
      products,
      queryFilter,
      queryName,
    },
  }
}

export default Store
