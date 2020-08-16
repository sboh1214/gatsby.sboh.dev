import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { graphql } from 'gatsby'
import Container from '../components/Layout'

export default function IndexPage({ data }: any) {
  return (
    <Container>
      <h1>Recent Posts</h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }: any) => (
        <Card
          key={node.id}
          onClick={() => {
            window.location = node.fields.path
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
    </Container>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            path
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
