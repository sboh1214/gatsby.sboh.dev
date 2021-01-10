import React from 'react'
import { render } from '@testing-library/react'
import Index from '..'
import NotFound from '../404'
import About from '../apps'
import Apps from '../apps'
import Libs from '../libs'

test('render', async () => {
  render(<NotFound />)
})

test('render', async () => {
  render(<About />)
})

test('render', async () => {
  render(<Apps />)
})

test('render', async () => {
  render(<Index />)
})

test('render', async () => {
  render(<Libs />)
})
