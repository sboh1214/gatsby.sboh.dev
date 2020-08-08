import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'modern-normalize'
import '../styles/normalize'

import Header from '../components/Header'
import LayoutRoot from '../components/LayoutRoot'
import LayoutMain from '../components/LayoutMain'
import Utterances from '../components/Utterances'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => (
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
      <LayoutRoot>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'ko' }}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'google-site-verification', content: '5qAz7-fx88YJKFF95FsgcUq40tLfbycOgCjb08i2lw4' }
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
        <Utterances />
      </LayoutRoot>
    )}
  />
)

export default IndexLayout
