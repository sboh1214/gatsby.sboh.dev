import React from 'react'
import renderer from 'react-test-renderer'

import Page from '../Page'

describe('Page', () => {
  it('renders correctly', () => {
    renderer.create(<Page />)
  })
})
