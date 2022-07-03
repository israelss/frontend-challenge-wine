import { getPage } from '@utils/store'

interface Props {
  mobile: boolean
  itemsPerPage: number
  page: number
  totalItems: number
  totalPages: number
  queryFilter: string
  queryName: string
}

const handleClick = (
  page: number,
  queryName: string,
  queryFilter: string,
  limit?: number,
  mobile?: boolean
): void => getPage({ page, queryName, queryFilter, limit, mobile: mobile ?? false })

const Paginator = ({
  mobile,
  itemsPerPage,
  page,
  totalItems,
  totalPages,
  queryName,
  queryFilter
}: Props): JSX.Element => {
  return mobile
    ? (
      <div>
        {
        itemsPerPage < totalItems && (
          <button onClick={() => handleClick(1, queryName, queryFilter, itemsPerPage + 8, true)}>
            Mostrar mais
          </button>
        )
      }
        <div>
          Exibindo {itemsPerPage} de  {totalItems} produtos no total
        </div>
      </div>
      )
    : (
      <div>
        {
        page > 1 && (
          <>
            <button onClick={() => handleClick(page - 1, queryName, queryFilter)}>Anterior</button>
            {
              page === totalPages && (
                <button onClick={() => handleClick(totalPages - 2, queryName, queryFilter)}>{totalPages - 2}</button>
              )
            }
            <button onClick={() => handleClick(page - 1, queryName, queryFilter)}>{page - 1}</button>
          </>
        )
      }
        <button>{page}</button>
        {
        page < totalPages && (
          <>
            <button onClick={() => handleClick(page + 1, queryName, queryFilter)}>{page + 1}</button>
            {page === 1 && <button onClick={() => handleClick(3, queryName, queryFilter)}>3</button>}
            <button onClick={() => handleClick(page + 1, queryName, queryFilter)}>Próximo</button>
          </>
        )
      }
      </div>
      )
}

export default Paginator
