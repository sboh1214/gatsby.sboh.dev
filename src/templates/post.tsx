import * as React from 'react'
import { graphql } from 'gatsby'
import Utterances from '../components/Utterances'
import Root from '../layout/Root'
import 'prismjs/themes/prism.css'
import { Container, Typography, CardContent, Card, makeStyles } from '@material-ui/core'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MdxPageQuery } from '../utils/type'

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(1)
  },
  h3: {
    marginTop: '16px',
    marginBottom: '36px',
    fontWeight: 'bold'
  },
  h4: {
    marginTop: '72px',
    fontWeight: 'bold'
  },
  p: {
    marginTop: '21px',
    marginBottom: '21px',
    fontSize: '16px'
  }
}))

function Post({ data }: MdxPageQuery) {
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx
  const styles = useStyles()

  return (
    <Root>
      <Container maxWidth="md">
        <Typography variant="h3" className={styles.h3}>
          {title}
        </Typography>
        <MDXProvider
          components={{
            h1: (props) => <Typography {...props} variant="h3" className={styles.h3} />,
            h2: (props) => <Typography {...props} variant="h4" className={styles.h4} />,
            p: (props) => <Typography {...props} variant="body1" className={styles.p} />,
            blockquote: (props) => (
              <Card className={styles.card}>
                <CardContent {...props} />
              </Card>
            )
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
