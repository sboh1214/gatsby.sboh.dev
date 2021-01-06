import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'

export default function Links() {
  return (
    <>
      <Link to="/about">
        <Button variant="ghost">About</Button>
      </Link>
      <Link to="/apps">
        <Button variant="ghost">Apps</Button>
      </Link>
      <Link to="/blog">
        <Button variant="ghost">Blog</Button>
      </Link>
      <Link to="/libs">
        <Button variant="ghost">Libraries</Button>
      </Link>
    </>
  )
}
