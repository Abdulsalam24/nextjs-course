import Head from 'next/head'
import { server } from '../config'
import ItemList from '../components/ItemList'
import styles from '../styles/Layout.module.css'


export default function Home({ res }) {
  return (
    <div>
      <div className={styles.grid}>
        {res.map(item => <ItemList key={item.id} item={item} />)}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch(`${server}/api/articles`)

  const res = await data.json()
  return {
    props: { res }
  }
}


// export const getStaticProps = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")

//   const res = await data.json()
//   return {
//     props: { res }
//   }
// }