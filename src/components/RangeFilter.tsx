import { ChangeEvent } from 'react'
import { useFilter } from '@hooks/useFilter'
import { StyledRangeFilter } from 'src/styles/styledComponents'

const RangeFilter = (): JSX.Element => {
  const { setRangeFilter } = useFilter()

  const handleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setRangeFilter(value)
  }

  return (
    <StyledRangeFilter>
      <h3>Refine sua busca</h3>
      <h4>Por preço</h4>
      <label htmlFor='all'>
        <input defaultChecked onChange={handleChange} type='radio' id='all' name='priceRange' value='' />
        Todos
      </label>
      <label htmlFor='upTo40'>
        <input onChange={handleChange} type='radio' id='upTo40' name='priceRange' value='0-40' />
        Até R$40
      </label>
      <label htmlFor='40To60'>
        <input onChange={handleChange} type='radio' id='40To60' name='priceRange' value='40-60' />
        R$40 A R$60
      </label>
      <label htmlFor='60To100'>
        <input onChange={handleChange} type='radio' id='60To100' name='priceRange' value='60-100' />
        R$60 A R$100
      </label>
      <label htmlFor='100To200'>
        <input onChange={handleChange} type='radio' id='100To200' name='priceRange' value='100-200' />
        R$100 A R$200
      </label>
      <label htmlFor='200To500'>
        <input onChange={handleChange} type='radio' id='200To500' name='priceRange' value='200-500' />
        R$200 A R$500
      </label>
      <label htmlFor='500Plus'>
        <input onChange={handleChange} type='radio' id='500Plus' name='priceRange' value='500-Infinity' />
        Acima de R$500
      </label>
    </StyledRangeFilter>
  )
}

export default RangeFilter
