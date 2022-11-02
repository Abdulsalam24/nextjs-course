import Meta from '../components/Meta'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'


const Layout = ({ children }) => {

    return (
        <>
            <Meta />

            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    {
                        children
                    }
                </main>
            </div>
        </>
    )
}

export default Layout