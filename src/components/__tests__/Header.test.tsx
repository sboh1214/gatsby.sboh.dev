import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../Header'

describe('Header', () => {
  it('renders correctly', () => {
    renderer.create(<Header title="hello" />)
  })
})
