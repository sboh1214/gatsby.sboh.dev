import * as React from 'react'
import { render } from '@testing-library/react'

import Index from '../index'

const data = {
  site: {
    siteMetadata: {
      title: `GatsbyJS`
    }
  },
  allMarkdownRemark: {
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
