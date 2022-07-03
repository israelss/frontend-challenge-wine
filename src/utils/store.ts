import Router from "next/router"

type GetPageArgs = {
  page: number;
  queryName: string;
  queryFilter: string;
  mobile?: boolean;
  limit?: number;
}

export const getPage = async ({ page, queryFilter, queryName, mobile, limit }: GetPageArgs) => {
  const queryLimit = !mobile ? 'limit=9' : limit ? `limit=${limit}` : 'limit=8'
  const queryPage = page ? `&page=${page}` : '&page=1'
  const base = mobile ? '/loja/mobile?' : '/loja?'
  const newPath = `${base}${queryLimit}${queryPage}${queryName}${queryFilter}`
  Router.push(newPath, undefined, { scroll: !mobile })
}
