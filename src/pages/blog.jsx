import React from 'react'
import Layout from '../components/layout'
import blogStyle from './blog.module.scss'
import { useStaticQuery, graphql, Link } from "gatsby"
import Head from '../components/head'

const Blog = () => {
  const { allContentfulBlogPost: { edges } = {} } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC } ) {
          edges {
              node {
                  title
                  slug
                  publishedDate(formatString:"MMMM Do, YYYY")
              }
          }
      }
  }
    `)
  return (
    <Layout>
      <Head title="Blog" />
      <h3>Blog</h3>
      <ol className={blogStyle.posts}>
        {edges.map(edge => {
          return (
            <li className={blogStyle.post} key={edge.node.title}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )

}

export default Blog
