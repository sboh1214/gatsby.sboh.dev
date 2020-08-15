import * as React from 'react'
import { css } from '@emotion/core'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '..'
import { graphql } from 'gatsby'

const IndexPage = ({ data }: any) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <h2>Board To Note</h2>
        <a href="https://github.com/sboh1214/BoardToNote-Android">
          <img src="https://github.com/sboh1214/BoardToNote-Android/workflows/Android/badge.svg" alt="Android" />
        </a>
        <div>
          <h1
            css={css`
              display: inline-block;
              border-bottom: 1px solid;
            `}
          >
            Recent Posts
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }: any) => (
            <div
              key={node.id}
              onClick={() => {
                window.location = node.fields.path
              }}
            >
              <h3>
                {node.frontmatter.title}{' '}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage

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
