import React from 'react'
import { render } from '@testing-library/react'
import Code404 from '../404'

describe(`404`, () => {
  it(`renders correctly`, () => {
    render(<Code404 />)
  })
})
