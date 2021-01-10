import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Comment from '../components/comment'
import { Divider, Heading, Tag } from '@chakra-ui/react'
import '../utils/theme.css'
import Markdown from '../components/markdown'
import { useTranslation } from 'react-i18next'

type Props = {
  data: any
}

export default function BlogPost({ data }: Props): JSX.Element {
  const {
    markdownRemark: {
      fields: { category },
      frontmatter: { title },
      html,
    },
  } = data
  const { t } = useTranslation()

  return (
    <Layout title={title}>
      <main>
        <article>
          <div>
            <header>
              <div>
                <Tag>{t(`category.${category}`)}</Tag>
              </div>
              <Heading>{title}</Heading>
            </header>
            <Divider />
            <Markdown dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </article>
        <Comment />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        category
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
