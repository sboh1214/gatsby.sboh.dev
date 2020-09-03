import React from 'react'
import { render } from '@testing-library/react'
import BoardToNote from '../board-to-note'

describe(`board-to-note`, () => {
  it(`renders correctly`, () => {
    render(<BoardToNote />)
  })
})
