import React from 'react'
import { render } from '@testing-library/react'
import ScrollTop from '../ScrollTop'

describe('ScrollTop', () => {
  it('renders correctly', () => {
    render(
      <ScrollTop>
        <>Hello</>
      </ScrollTop>
    )
  })
})
