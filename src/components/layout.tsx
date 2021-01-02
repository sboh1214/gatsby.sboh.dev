import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import SbohLayout from 'sboh-layout'

type Props = {
  children: React.ReactNode
}

function Links() {
  return (
    <>
      <Link to="/about">
        <Button variant="ghost">About</Button>
      </Link>
      <a href="/apps">
        <Button variant="ghost">Apps</Button>
      </a>
      <Link to="/blog">
        <Button variant="ghost">Blog</Button>
      </Link>
      <a href="/libs">
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
