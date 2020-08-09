import React from 'react'
import renderer from 'react-test-renderer'

import Code404 from '../404'

describe('Code404', () => {
  it('renders correctly', () => {
    renderer.create(<Code404 />)
  })
})
