import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.jsx'
import Head from '../components/head'

const NotFound = () => {
    return (
        <div>
            <Layout>
                <Head title="404" />
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <p><Link to="/">Go Home!</Link></p>
            </Layout>
        </div>
    )
}

export default NotFound
