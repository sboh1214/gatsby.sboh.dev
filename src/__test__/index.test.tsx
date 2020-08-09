import React from 'react'
import renderer from 'react-test-renderer'

import Index from '../index'

describe('Index', () => {
  it('renders correctly', () => {
    renderer.create(<Index />)
  })
})
