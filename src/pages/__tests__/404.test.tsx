import React from 'react'
import { render } from '@testing-library/react'
import { StaticQuery } from 'gatsby' // mocked

import Code404 from '../404'

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

describe(`404`, () => {
  it(`renders correctly`, () => {
    render(<Code404 />)
  })
})
