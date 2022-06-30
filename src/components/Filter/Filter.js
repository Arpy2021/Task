import style from './filter.module.scss'
import { FilterIcon } from '../../images'
import { useProductList } from '../useProductList'
import { useEffect, useState } from 'react'

function Filter({ filterlist, setFilterlist }) {
  const { items } = useProductList()
  const [checked, setChecked] = useState(false)
  const [checkedNew, setCheckedNew] = useState(false)

  useEffect(() => {
    setFilterlist(filterlist)
  }, [filterlist])

  /*
   * todo
   *  productChecked և productCheckedNew ֆունկցիաները նույն բանն են անում, պետքա գրել մի ֆունկցիա 2-ի համար
   * */

  function productChecked() {
    setChecked(!checked)
    if (!checked) {
      setFilterlist(items.filter(item => item.isLimited))
    } else {
      setFilterlist(items)
    }
  }

  function productCheckedNew() {
    setCheckedNew(!checkedNew)
    if (!checkedNew) {
      setFilterlist(items.filter(items => items.isNew))
    } else {
      setFilterlist(items)
    }
  }

  function productFilter(complete) {
    /*
     * todo բա որ 100 հատ լիներ
     *  շատ վատա գրած
     * */
    if (complete === 'ALL') {
      setFilterlist(items)
    } else if (complete === 'CANOLA') {
      setFilterlist(items.filter(item => item.categoryName === 'Canola'))
    } else if (complete === 'CORN') {
      setFilterlist(items.filter(item => item.categoryName === 'Corn'))
    } else if (complete === 'OATS') {
      setFilterlist(items.filter(item => item.categoryName === 'Oats'))
    } else if (complete === 'WHEAT') {
      setFilterlist(items.filter(item => item.categoryName === 'Wheat'))
    } else if (complete === 'SOYBEANS') {
      setFilterlist(items.filter(item => item.categoryName === 'Soybeans'))
    } else if (complete === 'BARLEY') {
      setFilterlist(items.filter(item => item.categoryName === 'Barley'))
    }
  }

  return (
    <div className={style.filterBlocks}>
      <div className={style.filter}>
        <div className={style.filterGroup}>
          <div className={style.filterWrapper}>
            <FilterIcon />
            <span className={style.text}>Filters</span>
          </div>
          <div className={style.filtersGroup}>
            <div className={style.category}>
              <div className={style.categoryTitle}>Category</div>
              <div className={style.filtersBtn}>
                {/*todo ունես կատեգորիաների լիստ պետք էր ցույց տալ բեքից ստացված կատեգորիանրը*/}
                <button onClick={() => productFilter('ALL')}>All</button>
                <button onClick={() => productFilter('CANOLA')}>Canola</button>
                <button onClick={() => productFilter('CORN')}>Corn</button>
                <button onClick={() => productFilter('OATS')}>Oats</button>
                <button onClick={() => productFilter('WHEAT')}>Wheat</button>
                <button onClick={() => productFilter('SOYBEANS')}>Soybeans</button>
                <button onClick={() => productFilter('BARLEY')}>Barley</button>
              </div>
            </div>
            <div className={style.status}>
              <div className={style.statusTitle}>Status</div>
              <div className={style.checkboxWrapper}>
                <div className={style.inputCheckbox}>
                  <input type="checkbox" checked={checked} onClick={productChecked} value="Limited" />
                  <label>Limited</label>
                </div>
                <div className={style.inputCheckbox}>
                  <input type="checkbox" checked={checkedNew} onClick={productCheckedNew} value="new" />
                  <label>New</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Filter
