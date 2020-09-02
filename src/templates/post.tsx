import * as React from 'react'
import { graphql } from 'gatsby'
import Utterances from '../components/Utterances'
import Root from '../components/Root'
import 'prismjs/themes/prism-okaidia.css'
import { Container } from '@material-ui/core'

interface PageTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      fields: {
        path: string
      }
      frontmatter: {
        title: string
      }
    }
  }
}

const Post = ({ data }: PageTemplateProps) => (
  <Root>
    <Container maxWidth="md">
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <Utterances />
    </Container>
  </Root>
)

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
