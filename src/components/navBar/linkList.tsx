import React from 'react'
import { Link } from 'gatsby'

type Props = {
  links: any
  setToggle: any
}

type LinkProps = {
  link: string
  name: string
}

export default function LinkList({ links, setToggle }: Props): JSX.Element {
  const generateLink = (link: string, name: string): React.ReactNode => {
    const expression = /(https?:\/\/)?[\w\-~]+(\.[\w\-~]+)+(\/[\w\-~@:%]*)*(#[\w-]*)?(\?[^\s]*)?/gi
    const isExternalLink = expression.test(link)
    if (link === '/') {
      return (
        <li key={name} onClick={() => setToggle(false)}>
          <Link to={link}>{name}</Link>
        </li>
      )
    }
    if (isExternalLink) {
      return (
        <li key={name}>
          <a target="__blank" rel="noreferrer" href={link}>
            {name}
          </a>
        </li>
      )
    }
    return (
      <li key={name}>
        <Link to={link}>{name}</Link>
      </li>
    )
  }

  return <>{links.map(({ link, name }: LinkProps) => generateLink(link, name))}</>
}
