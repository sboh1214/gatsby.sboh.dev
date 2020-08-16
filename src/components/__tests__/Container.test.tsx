import React from 'react'
import renderer from 'react-test-renderer'

import Container from '../Layout'

describe('Container', () => {
  it('renders correctly', () => {
    renderer.create(<Container />)
  })
})
