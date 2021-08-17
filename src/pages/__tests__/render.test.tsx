import React from 'react'
import Index from '..'
import NotFound from '../404'
import About from '../apps'
import Apps from '../apps'
import Libs from '../libs'
import renderWithProvider from '../../utils/render'

test('render NotFound', async () => {
  renderWithProvider(<NotFound />)
})

test('render About', async () => {
  renderWithProvider(<About />)
})

test('render Apps', async () => {
  renderWithProvider(<Apps />)
})

test('render Index', async () => {
  renderWithProvider(<Index />)
})

test('render Libs', async () => {
  renderWithProvider(<Libs />)
})
