import React from 'react'
import Layout from '../components/layout'

type Props = {
  pageContext: any
}

export default function About({ pageContext }: Props): JSX.Element {
  return (
    <Layout title="About">
      <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
    </Layout>
  )
}
