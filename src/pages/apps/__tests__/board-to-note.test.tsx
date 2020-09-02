import React from 'react'
import { render } from '@testing-library/react'
import BoardToNote from '../board-to-note'
import { mockStaticQuery } from '../../../utils/mock'

beforeEach(mockStaticQuery)

describe(`board-to-note`, () => {
  it(`renders correctly`, () => {
    render(<BoardToNote />)
  })
})
