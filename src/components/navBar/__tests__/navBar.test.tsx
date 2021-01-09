import React from 'react'
import { render } from '@testing-library/react'
import NavBar from '../navBar'

test('render', async () => {
  render(
    <NavBar>
      <div />
    </NavBar>
  )
})
