import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Comment from '../components/comment'
import { Divider, Heading, Text } from '@chakra-ui/react'

type Props = {
  data: any
}

export default function BlogPost({ data }: Props): JSX.Element {
  const {
    markdownRemark: {
      frontmatter: { title, desc, thumbnail, date, category },
      html,
    },
  } = data

  const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src

  return (
    <Layout>
      <SEO title={title} description={desc} image={ogImagePath} />
      <main>
        <article>
          <div>
            <header>
              <div>
                <Text>{category}</Text>
                <Text>{date}</Text>
              </div>
              <Heading>{title}</Heading>
              <Text>{desc}</Text>
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
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        thumbnail {
          childImageSharp {
            fixed {
              src
            }
          }
        }
        date(formatString: "YYYY-MM-DD")
        category
      }
    }
  }
`
