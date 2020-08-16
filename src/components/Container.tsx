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
          <Helmet
            title={data.site.siteMetadata.title ?? 'Platypus Dev Blog'}
            htmlAttributes={{ lang: 'ko' }}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
              { name: 'google-site-verification', content: '5qAz7-fx88YJKFF95FsgcUq40tLfbycOgCjb08i2lw4' }
            ]}
            script={[
              {
                type: 'text/javascript',
                innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WRDHGWF');`
              }
            ]}
          >
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          </Helmet>
          <Layout>{children}</Layout>
        </>
      )}
    />
  )
}
