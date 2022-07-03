import { ChangeEvent, useState } from "react"
import { useFilter } from "@hooks/useFilter";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const { setNameFilter } = useFilter()

  const handleChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    setName(value.trim())
  }

  return (
    <div>
      <button onClick={()=>setIsOpen(!isOpen)}>Toggle Search</button>
      {
        isOpen && (
          <div>
            <input type="text" value={name} onChange={ handleChange }/>
            <button onClick={ () => setNameFilter(name) }>
              Buscar
            </button>
          </div>
        )
      }
    </div>
  );
}

export default Search
