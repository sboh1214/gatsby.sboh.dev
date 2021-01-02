import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import SbohLayout from 'sboh-layout'
import useSiteMetadata from '../hooks/useSiteMetadata'
import LinkList from './linkList'

type Props = {
  children: React.ReactNode
}

function Links() {
  return (
    <>
      <a href="https://sboh.dev">
        <Button variant="ghost">About</Button>
      </a>
      <a href="https://sboh.dev/apps">
        <Button variant="ghost">Apps</Button>
      </a>
      <Link to="/">
        <Button variant="ghost">Blog</Button>
      </Link>
      <a href="https://sboh.dev/libs">
        <Button variant="ghost">Libraries</Button>
      </a>
    </>
  )
}

export default function Layout({ children }: Props) {
  return (
    <SbohLayout title={<Link to="/">오승빈의 개발 블로그</Link>} links={<Links />}>
      {children}
    </SbohLayout>
  )
}
