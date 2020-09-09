import * as React from 'react'
import { graphql } from 'gatsby'
import Utterances from '../components/Utterances'
import Root from '../components/Root'
import 'prismjs/themes/prism-okaidia.css'
import { Container, Typography, CardContent, Card } from '@material-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

function Post({ data }) {
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx
  return (
    <Root>
      <Container maxWidth="md">
        <Typography variant="h3">{title}</Typography>
        <MDXProvider
          components={{
            h1: (props) => <Typography {...props} variant="h3" className={{ fontWeight: 'bold' }} />,
            h2: (props) => <Typography variant="h4" {...props} />,
            blockquote: (props) => (
              <Card>
                <CardContent>
                  <Typography variant="body1" {...props} />
                </CardContent>
              </Card>
            ),
            table: (props) => <table className={{ width: '600px' }} {...props} />,
            p: (props) => <Typography variant="body1" className={{ fontSize: '22px' }} {...props} />
          }}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
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
