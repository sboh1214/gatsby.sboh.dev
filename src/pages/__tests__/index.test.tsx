import * as React from 'react'
import { render } from '@testing-library/react'

import Index from '../index'
import { StaticQuery } from 'gatsby'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`
        }
      }
    })
  )
})

const data = {
  allMarkdownRemark: {
    totalCount: 1,
    edges: [
      {
        node: {
          fields: {
            path: 'hello'
          },
          frontmatter: {
            title: 'hello'
          },
          excerpt: 'hello'
        }
      }
    ]
  }
}

describe(`Index`, () => {
  it(`renders correctly`, () => {
    render(<Index data={data} />)
  })
})
