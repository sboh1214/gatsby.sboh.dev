import React from 'react'
import renderWithProvider from '../../utils/render'
import Layout from '../layout'

test('render Layout', async () => {
  renderWithProvider(<Layout title="Hello">Hello</Layout>)
})
