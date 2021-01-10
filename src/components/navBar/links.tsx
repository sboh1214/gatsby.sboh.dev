import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

type Props = {
  width?: string
}

export default function Links({ width }: Props) {
  const { t } = useTranslation()

  return (
    <>
      <Link to="/about">
        <Button variant="ghost" flexDirection="column" alignItems="start" width={width}>
          {t('nav.about')}
        </Button>
      </Link>
      <Link to="/apps">
        <Button variant="ghost" flexDirection="column" alignItems="start" width={width}>
          {t('nav.apps')}
        </Button>
      </Link>
      <Link to="/libs">
        <Button variant="ghost" flexDirection="column" alignItems="start" width={width}>
          {t('nav.libs')}
        </Button>
      </Link>
      <Link to="/blog">
        <Button variant="ghost" flexDirection="column" alignItems="start" width={width}>
          {t('nav.blog')}
        </Button>
      </Link>
    </>
  )
}
