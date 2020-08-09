import React from 'react'
import renderer from 'react-test-renderer'

import LayoutRoot from '../LayoutRoot'

describe('LayoutRoot', () => {
  it('renders correctly', () => {
    renderer.create(<LayoutRoot />)
  })
})
