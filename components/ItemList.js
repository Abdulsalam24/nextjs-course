import Link from 'next/link'
import styles from '../styles/Layout.module.css'


const ItemList = ({item}) => {
  return (
    <Link href={"/article/id"} as={`/article/${item.id}`} className={styles.card}>
      <h3>{item.title}</h3>
    </Link>
  )
}

export default ItemList