import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders correctly', () => {
    renderer.create(<Footer />)
  })
})
