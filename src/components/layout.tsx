import { Link } from 'gatsby'
import React from 'react'
import SbohLayout from 'sboh-layout'
import useSiteMetadata from '../hooks/useSiteMetadata'
import LinkList from './linkList'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const site = useSiteMetadata()
  const { menuLinks } = site.siteMetadata

  return (
    <SbohLayout title={<Link to="/">오승빈의 개발 블로그</Link>} links={<LinkList links={menuLinks} />}>
      {children}
    </SbohLayout>
  )
}
