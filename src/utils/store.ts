import Router from 'next/router'

interface GetPageArgs {
  page: number
  queryName: string
  queryFilter: string
  mobile: boolean
  limit?: number
}

export const getPage = ({ page, queryFilter, queryName, mobile, limit }: GetPageArgs): void => {
  const queryLimit = !mobile ? 'limit=9' : limit !== undefined && limit > 0 ? `limit=${JSON.stringify(limit)}` : 'limit=8'
  const queryPage = `&page=${page}`
  const base = mobile ? '/loja/mobile?' : '/loja?'
  const newPath = `${base}${queryLimit}${queryPage}${queryName}${queryFilter}`
  void Router.push(newPath, undefined, { scroll: !mobile })
}

export const validateQueryItem = (query?: string | string[]): string => {
  const isValid = query !== undefined && query?.length > 0 && typeof query === 'string'
  return isValid ? query : ''
}

export const API_URL = 'https://wine-back-test.herokuapp.com/products'
