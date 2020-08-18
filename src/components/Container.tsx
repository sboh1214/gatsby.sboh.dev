import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from './Layout'
import { Helmet } from 'react-helmet'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

export default function Container({ children }: any) {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <>
          <Helmet htmlAttributes={{ lang: 'ko' }}>
            <title>{data.site.siteMetadata.title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta name="google-site-verification" content="5qAz7-fx88YJKFF95FsgcUq40tLfbycOgCjb08i2lw4" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Helmet>
          <Layout>{children}</Layout>
        </>
      )}
    />
  )
}
