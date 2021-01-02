import React from 'react'
import { Link } from 'gatsby'
import { Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

type Props = {
  links: any
}

type LinkProps = {
  link: string
  name: string
}

export default function LinkList({ links }: Props): JSX.Element {
  const generateLink = (link: string, name: string): React.ReactNode => {
    const expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi
    const isExternalLink = expression.test(link)
    if (link === '/') {
      return (
        <Link key={name} to={link}>
          <Button variant="ghost">{name}</Button>
        </Link>
      )
    }
    if (isExternalLink) {
      return (
        <a key={name} target="__blank" rel="noreferrer" href={link}>
          <Button variant="ghost" rightIcon={<ExternalLinkIcon />}>
            {name}
          </Button>
        </a>
      )
    }
    return (
      <Link key={name} to={link}>
        <Button variant="ghost">{name}</Button>
      </Link>
    )
  }

  return <>{links.map(({ link, name }: LinkProps) => generateLink(link, name))}</>
}
