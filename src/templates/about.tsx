import React from 'react'
import Layout from '../components/layout'
import Markdown from '../utils/markdown'

type Props = {
  pageContext: any
}

export default function About({ pageContext }: Props): JSX.Element {
  return (
    <Layout title="About">
      <Markdown dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Layout>
  )
}
