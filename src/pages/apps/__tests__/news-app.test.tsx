import React from 'react'
import { render } from '@testing-library/react'
import NewsApp from '../news-app'
import { mockStaticQuery } from '../../../utils/mock'

beforeEach(mockStaticQuery)

describe(`news-app`, () => {
  it(`renders correctly`, () => {
    render(<NewsApp />)
  })
})
