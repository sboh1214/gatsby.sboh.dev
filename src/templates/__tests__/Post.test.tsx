import React from 'react'
import renderer from 'react-test-renderer'

import Post from '../Post'

const exampleData = {
  data: {
    site: {
      siteMetadata: {
        title: 'string',
        description: 'string',
        author: {
          name: 'string',
          url: 'string'
        }
      }
    },
    markdownRemark: {
      html: 'string',
      excerpt: 'string',
      fields: {
        path: 'string'
      },
      frontmatter: {
        title: 'string'
      }
    }
  }
}

describe('Post', () => {
  it('renders correctly', () => {
    renderer.create(<Post data={exampleData.data} />)
  })
})
