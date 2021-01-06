import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Comment from '../components/comment'
import { Divider, Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import '../utils/theme.css'

type Props = {
  data: any
}

const Markdown = styled.article`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  td,
  th {
    border-bottom: 1px solid #d1d1d1;
  }

  strong {
    font-weight: 600;
  }

  a,
  p {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: #0066cc !important;
    * {
      color: #0066cc !important;
    }
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }

  & > *:first-child {
    margin-top: 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
  }

  h3 {
    font-size: 1.31951rem;
    line-height: 1.3;
  }

  h4,
  h5,
  h6 {
  }

  ul,
  ol {
  }

  li > ul,
  li > ol {
    margin-top: 0;
    margin-bottom: 0;
  }

  li > p {
    margin-bottom: 0;
  }

  li > ol,
  li > ul {
  }

  li {
  }

  p,
  li,
  blockquote {
    font-size: 1.0625rem;
  }

  p {
    line-height: 1.68;
    text-align: left;
    margin-bottom: 24px;
  }

  hr {
    margin: 40px 0;
    background: #d1d1d1;
  }

  blockquote {
    border-left: 0.25rem solid #e0e0e0;
    padding-left: 16px;
    margin: 24px 0;
    * {
      color: #696969;
    }
  }

  img {
    display: block;
  }
`

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
