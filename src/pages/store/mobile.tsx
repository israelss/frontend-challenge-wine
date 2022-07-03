import Router from 'next/router';
import { GetServerSideProps } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { ProductsApiReturn } from 'src/types/product';
import { useWindowSize } from '@hooks/useWindowSize';
import Paginator from '@components/Paginator';
import ProductCard from '@components/ProductCard';

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
  const [isNotMobile, setIsNotMobile] = useState<boolean>(false)
  const { width } = useWindowSize()

  useEffect(() => {
    if (isNotMobile) Router.push(`/loja${queryName}${queryFilter}`)
  }, [isNotMobile, queryFilter, queryName])

  const checkMobile = useCallback(async () => {
    while(!width) await new Promise((resolve) => setTimeout(resolve, 50))
    setIsNotMobile(width > 375)
  }, [width])

  useEffect(() => {
    checkMobile()
  }, [checkMobile])

  if (products.totalItems === 0) return (
    <div>
      <h1>Nenhum produto foi encontrado. Tente com outros filtros...</h1>
    </div>
  )

  return (
    <div>
      <div className='totalFound'>{products.totalItems} produtos encontrados</div>
      {
        products.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
      <Paginator
        mobile={true}
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
  const queryFilter = filter ? `&filter=${filter}` : ''
  const queryLimit = limit ? `limit=${limit}` : 'limit=8'
  const queryName = name ? `&name=${name}` : ''
  const queryPage = page ? `&page=${page}` : '&page=1'
  const url = `https://wine-back-test.herokuapp.com/products?${queryLimit}${queryPage}${queryName}${queryFilter}`
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