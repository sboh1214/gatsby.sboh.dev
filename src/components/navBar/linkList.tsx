import React from 'react'
import { Link } from 'gatsby'

interface Props {
  links: any
  setToggle: any
}

interface LinkProps {
  link: string
  name: string
}

const LinkList = ({ links, setToggle }: Props) => {
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

export default LinkList
