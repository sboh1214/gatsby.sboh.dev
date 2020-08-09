import React from 'react'
import renderer from 'react-test-renderer'

import Container from '../Container'

describe('Container', () => {
  it('renders correctly', () => {
    renderer.create(<Container />)
  })
})
