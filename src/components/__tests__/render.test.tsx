import React from 'react'
import { render } from '@testing-library/react'
import Layout from '../layout'
import CategoryFilter from '../categoryFilter'

test('render', async () => {
  render(<CategoryFilter categoryList={[{ fieldValue: '', totalCount: 1 }]} />)
})

test('render', async () => {
  render(<Layout title="Hello">Hello</Layout>)
})
