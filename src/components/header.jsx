import React from 'react'
import { Link } from "gatsby"
import { useSiteMetadata } from '../hooks/use-site-metadata'
import headerModule from './header.module.scss'

function Header() {
    const { author } = useSiteMetadata();
    return (
        <header className={headerModule.header}>
            <h1>
                <Link className={headerModule.logo} to="/">
                    {author}
                </Link>
            </h1>
            <nav>
                <ul className={headerModule.navList}>
                    <li><Link className={headerModule.navItem} activeClassName={headerModule.activeNavItem} to="/" >Home</Link></li>
                    <li><Link className={headerModule.navItem} activeClassName={headerModule.activeNavItem} to="/info" >Info</Link></li>
                    <li><Link className={headerModule.navItem} activeClassName={headerModule.activeNavItem} to="/blog" >Blog</Link></li>
                    <li><Link className={headerModule.navItem} activeClassName={headerModule.activeNavItem} to="/contacts" >Contacts</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
