import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { graphql, navigate } from 'gatsby'
import Root from '../components/Root'
import { GridList, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  card: {
    margin: theme.spacing(3)
  }
}))

export default function IndexPage({ data }: any) {
  const classes = useStyles()

  return (
    <Root>
      <h1>Recent Posts</h1>
      <h4>{data.allMdx.totalCount} Posts</h4>
      <GridList cellHeight={160}>
        {data.allMdx.edges.map(({ node }: any) => (
          <Card
            className={classes.card}
            key={node.id}
            onClick={() => {
              navigate(node.fields.path)
            }}
          >
            <CardContent>
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </GridList>
    </Root>
  )
}

export const query = graphql`
  query {
    allMdx {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
          }
          excerpt(pruneLength: 160)
        }
      }
    }
  }
`
