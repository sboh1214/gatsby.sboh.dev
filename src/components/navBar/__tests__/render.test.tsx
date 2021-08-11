import React from 'react'
import { render } from '@testing-library/react'
import Links from '../links'
import NavBar from '../navBar'
import SelectTranslation from '../selectTranslation'
import SelectTheme from '../selectTheme'
import ToolBar from '../toolBar'
import renderWithProvider from '../../../utils/render'

test('render Links', async () => {
  render(<Links />)
})

test('render NavBar', async () => {
  renderWithProvider(<NavBar />)
})

test('render SelectTranslation', async () => {
  render(<SelectTranslation isLarge={true} />)
  render(<SelectTranslation isLarge={false} />)
})

test('render SelectTheme', async () => {
  renderWithProvider(<SelectTheme isLarge={true} />)
  renderWithProvider(<SelectTheme isLarge={false} />)
})

test('render ToolBar', async () => {
  renderWithProvider(<ToolBar isLarge={true} />)
  renderWithProvider(<ToolBar isLarge={false} />)
})
