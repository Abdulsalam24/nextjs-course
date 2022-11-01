import Link from 'next/link'
import { useState } from 'react'

import Navstyle from '../styles/Nav.module.css'


const Nav = () => {
    const [mobile, setMobile] = useState(false)


    return (
        <nav className={Navstyle.nav}>
            <div className={Navstyle.menu}>
                <span onClick={() => setMobile((prevState) => !prevState)}>{mobile ? "x" : "="}</span>
                <div>
                    <h1>sneakers</h1>
                </div>
                {
                    mobile && (
                        <ul className='list'>
                            <li>
                                <Link href="/">collection</Link>
                            </li>
                            <li>
                                <Link href="/about">men</Link>
                            </li>
                            <li>
                                <Link href="/about">women</Link>
                            </li>
                            <li>
                                <Link href="/about">about</Link>
                            </li>
                            <li>
                                <Link href="/about">contact</Link>
                            </li>
                        </ul>
                    )
                }
            </div>

            <div className="profile">
                <i>Cart</i>
                {/* <div>
                    <img src="" alt="" />
                </div> */}
            </div>
        </nav>
    )
}

export default Nav