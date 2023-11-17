
import { useEffect, useState } from 'react'
import './App.css'
import { VerticalList } from './components/VerticalList'
import { Item } from './components/ListItem'
import { getAllTodos } from './apis/TodosApis'
import { SearchBox } from './components/SearchBox'

function App() {
  const [listValues, setListValues] = useState<Item[]>([])
  const [filteredListValues, setFilteredListValues] = useState<Item[]>([])

  useEffect(() => {
    getAllTodos().then((data) => {
      setListValues(data)
      setFilteredListValues(data)
  })
  }, [])
  
  return (
    <section className="mx-auto max-w-sm pt-16">
      <h1 className='font-extrabold text-pink-500 mb-10'>Yet another TODO List Web App!</h1>
     <SearchBox listValues={listValues} setFilteredListValues={setFilteredListValues} />
      <VerticalList listValues={filteredListValues} />
    </section>
  )
}

export default App
