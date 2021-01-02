import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default function About(): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  const md = data.allMarkdownRemark.edges[0].node.html

  return (
    <Layout>
      <SEO title="About" />
      <div dangerouslySetInnerHTML={{ __html: md }} />
    </Layout>
  )
}
