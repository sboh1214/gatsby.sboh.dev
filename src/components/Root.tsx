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

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default function Root({ children }: any) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data: StaticQueryProps) => (
        <>
          <Helmet htmlAttributes={{ lang: 'ko' }}>
            <title>{data.site.siteMetadata.title}</title>
            <meta charSet="utf-8" />
            <meta name="description" content={data.site.siteMetadata.description} />
            <meta name="keywords" content={data.site.siteMetadata.keywords} />
            <meta name="google-site-verification" content="5qAz7-fx88YJKFF95FsgcUq40tLfbycOgCjb08i2lw4" />
          </Helmet>
          <Layout>{children}</Layout>
        </>
      )}
    />
  )
}
