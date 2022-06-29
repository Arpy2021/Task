import style from './header.module.scss'
import { Search } from '../../images'
import { useState } from 'react'
import { useProductList } from '../useProductList'

function Header({ setFilterlist }) {
  const { items } = useProductList()
  const [search, setSearch] = useState({
    searchInput: '',
  })

  function handleChange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value })
    setFilterlist(items.filter(item => item.description.includes(search.searchInput)))
  }
  return (
    <div className={style.header}>
      <div className={style.headerWrapper}>
        <div className={style.title}>Product</div>
        <div className={style.search}>
          <Search />
          <input
            type="text"
            value={search.searchInput}
            name={'searchInput'}
            className={style.searchInput}
            placeholder={'Search among products'}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
export default Header
