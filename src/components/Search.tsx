import { ChangeEvent, useState } from 'react'
import { useFilter } from '@hooks/useFilter'
import WineIcon from './WineIcon'
import { StyledSearch } from 'src/styles/styledComponents'

const Search = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const { setNameFilter } = useFilter()

  const handleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setName(value.trim())
  }

  return (
    <StyledSearch>
      <div onClick={() => setIsOpen(!isOpen)} className='openSearchButton'>
        <WineIcon id='search-icon' height={32} width={32} />
      </div>
      {
        isOpen && (
          <div className="searchBar">
            <input type='text' value={name} onChange={handleChange} />
            <div className='searchButton' onClick={() => setNameFilter(name)}>
              Buscar
            </div>
          </div>
        )
      }
    </StyledSearch>
  )
}

export default Search
