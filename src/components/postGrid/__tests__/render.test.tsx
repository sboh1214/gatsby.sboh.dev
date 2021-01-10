import { render } from '@testing-library/react'
import React from 'react'
import Card from '../card'

test('render', async () => {
  render(<Card category="" title="" date="2002-12-14" excerpt="" />)
})
