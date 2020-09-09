import React from 'react'
import { render } from '@testing-library/react'
import HideOnScroll from '../HideOnScroll'

describe('HideOnScroll.test', () => {
  it('renders correctly', () => {
    render(
      <HideOnScroll>
        <>Hello</>
      </HideOnScroll>
    )
  })
})
