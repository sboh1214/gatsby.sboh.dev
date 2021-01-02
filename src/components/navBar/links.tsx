import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'

export default function Links() {
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
