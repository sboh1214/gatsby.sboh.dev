import * as React from 'react'
import { render } from '@testing-library/react'
import Index from '../index'
import { AllMdxPageData } from '../../utils/type'

const data: AllMdxPageData = {
  allMdx: {
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
