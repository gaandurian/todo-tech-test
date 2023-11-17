import React from 'react'
import { Item } from './ListItem'

interface SearchBoxProps {
   
    setFilteredListValues: (list: Item[]) => void
    listValues: Item[]
}

export const SearchBox: React.FC<SearchBoxProps> = ({ setFilteredListValues, listValues }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setFilteredListValues(listValues)
      return;
    }
    const new_list = listValues.filter(item => item.title.includes(e.target.value))
    setFilteredListValues(new_list)
  }


  return (
    <div>
        <label className="font-bold text-xs text-gray-600" htmlFor="filter">Search todos</label>

       <input id="filter" name="filter" 
       className="font-medium text-gray-600 text-xl min-w-full border-2 px-4 py-2 border-gray-200 mb-5" type="text" 
       onChange={handleFilterChange}/>  

    </div>
  )
}
