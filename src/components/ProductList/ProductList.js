import styles from './ProductList.module.scss'
import { Corn } from '../../images'
import { useEffect } from 'react'
import { useProductList } from '../useProductList'

const ProductList = ({ filterlist, setFilterlist }) => {
  const { items } = useProductList()
  useEffect(() => {
    setFilterlist(items)
  }, [items])

  return (
    <div className={styles.productList}>
      <div className={styles.itemsContainer}>
        {/*todo պետք էր սարքել առանճին կոմպոնենտ*/}
        {filterlist.map(item => (
          <div className={styles.productContainer} key={item.id}>
            <img src={Corn} alt="" />
            <div className={styles.productWrapper}>
              <div className={styles.limitedBlock}>
                {item.isLimited ? <span className={styles.limited}>Limited</span> : ''}
                {item.isNew ? <span className={styles.new}>new</span> : ''}
              </div>
              <div className={styles.descriptionWrapper}>
                <span className={styles.categoryName}>{item.categoryName}</span>
                <span className={styles.productName}>{item.name}</span>
                <span className={styles.description}>{item.description}</span>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>{item.price}$</span>
                  {item.discount !== null ? (
                    <span className={styles.discount}>Discount{item.discount} per bag</span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
