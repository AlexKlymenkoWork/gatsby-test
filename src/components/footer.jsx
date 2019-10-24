import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import footerModule from './footer.module.scss'

function Footer() {
    const { author } = useSiteMetadata();
    return (
        <footer className={footerModule.footer}>
            <p>© Created by {author} {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
