import React from 'react'
import { render } from '@testing-library/react'
import Post from '../post'
import { mockStaticQuery } from '../../utils/mock'

beforeEach(mockStaticQuery)

const data = {
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

describe(`Post`, () => {
  it(`renders correctly`, () => {
    render(<Post data={data} />)
  })
})
