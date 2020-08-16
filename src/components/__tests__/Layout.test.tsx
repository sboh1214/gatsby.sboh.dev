import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../Layout'

describe('Layout', () => {
  it('renders correctly', () => {
    renderer.create(<Layout />)
  })
})
