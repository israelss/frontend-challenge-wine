import { ChangeEvent, useState } from 'react'
import { useFilter } from '@hooks/useFilter'
import WineIcon from './WineIcon'

const Search = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const { setNameFilter } = useFilter()

  const handleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setName(value.trim())
  }

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className='openSearchButton'>
        <WineIcon id='search-icon' />
      </button>
      {
        isOpen && (
          <div>
            <input type='text' value={name} onChange={handleChange} />
            <button onClick={() => setNameFilter(name)}>
              Buscar
            </button>
          </div>
        )
      }
    </div>
  )
}

export default Search
