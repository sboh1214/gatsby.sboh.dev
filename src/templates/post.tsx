import * as React from 'react'
import { graphql } from 'gatsby'
import Utterances from '../components/Utterances'
import Root from '../components/Root'
import 'prismjs/themes/prism-okaidia.css'
import { Container, Typography } from '@material-ui/core'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function Post({ data }) {
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx
  return (
    <Root>
      <Container maxWidth="md">
        <h1>{title}</h1>
        <MDXRenderer
          components={{
            h1: (props) => <Typography variant="h1" {...props} />,
            h2: (props) => <Typography variant="h1" {...props} />,
            h3: () => <Typography variant="h1" />
          }}
        >
          {body}
        </MDXRenderer>
        <Utterances />
      </Container>
    </Root>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
