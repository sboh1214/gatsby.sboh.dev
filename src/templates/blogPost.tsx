import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Comment from '../components/comment'
import { Divider, Heading, Text } from '@chakra-ui/react'

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

  return (
    <Layout title={title}>
      <main>
        <article>
          <div>
            <header>
              <div>
                <Text>{category}</Text>
              </div>
              <Heading>{title}</Heading>
            </header>
            <Divider />
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
