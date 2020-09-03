import React from 'react'
import { render } from '@testing-library/react'
import NewsApp from '../news-app'

describe(`news-app`, () => {
  it(`renders correctly`, () => {
    render(<NewsApp />)
  })
})
