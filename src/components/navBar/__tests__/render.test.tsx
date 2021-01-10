import React from 'react'
import { render } from '@testing-library/react'
import Links from '../links'
import NavBar from '../navBar'
import SelectTranslation from '../selectTranslation'
import ThemeToggleButton from '../themeToggleButton'
import ToolBar from '../toolBar'

test('render', async () => {
  render(<Links />)
})

test('render', async () => {
  render(<NavBar />)
})

test('render', async () => {
  render(<SelectTranslation isLarge={true} />)
  render(<SelectTranslation isLarge={false} />)
})

test('render', async () => {
  render(<ThemeToggleButton isLarge={true} />)
  render(<ThemeToggleButton isLarge={false} />)
})

test('render', async () => {
  render(<ToolBar isLarge={true} />)
  render(<ToolBar isLarge={false} />)
})
