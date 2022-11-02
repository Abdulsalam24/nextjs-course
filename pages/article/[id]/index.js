import Link from 'next/link'
import React from 'react'
import { server } from '../../../config'

const article = ({ article }) => {

    console.log(article)

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <br />
            <Link href={"/"}>go back</Link>
        </div>
    )
}



export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: { article }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)

    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: { article }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map((article) => article.id)

//     const paths = ids.map((id) => ({params : {id : id.toString()}}))

//     return {
//         paths,
//         fallback: false
//     }
// }


export default article