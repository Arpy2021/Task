import ProductList from './components/ProductList/ProductList'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import { useState } from 'react'

function App() {
  const [filterlist, setFilterlist] = useState([])

  /*toto սթայլերը ուղել*/
  return (
    <div>
      <Header setFilterlist={setFilterlist} />
      <Filter filterlist={filterlist} setFilterlist={setFilterlist} />
      <ProductList filterlist={filterlist} setFilterlist={setFilterlist} />
    </div>
  )
}

export default App
