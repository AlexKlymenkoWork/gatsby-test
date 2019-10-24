import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

function contacts() {
    return (
        <Layout>
            <Head title="Contacts" />
            <div>
                <br />
                <hr />
                <p>list of my contacts: </p>
                <ul>
                    <li>git</li>
                    <li>twitter</li>
                    <li>facebook</li>
                    <li>instagram</li>
                </ul>
                <br />
            </div>
        </Layout>
    )
}

export default contacts
