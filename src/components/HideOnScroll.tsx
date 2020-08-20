import React from 'react'
import { useScrollTrigger, Slide } from '@material-ui/core'

interface Props {
  children: React.ReactElement
}

export default function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
