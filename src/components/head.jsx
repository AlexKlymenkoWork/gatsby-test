import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const Head = ({ title }) => {
    const { site: { siteMetadata } = {} } = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title
          }
        }
      }
    `)

    return (
        <Helmet title={`${title} | ${siteMetadata.title}`} />
    )
}

export default Head
