import React from 'react'
import renderer from 'react-test-renderer'

import LayoutMain from '../LayoutMain'

describe('LayoutMain', () => {
  it('renders correctly', () => {
    renderer.create(<LayoutMain />)
  })
})
