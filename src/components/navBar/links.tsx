import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'

export default function Links() {
  const { t } = useTranslation()

  return (
    <>
      <Link to="/about">
        <Button variant="ghost">{t('nav.about')}</Button>
      </Link>
      <Link to="/apps">
        <Button variant="ghost">{t('nav.apps')}</Button>
      </Link>
      <Link to="/libs">
        <Button variant="ghost">{t('nav.libs')}</Button>
      </Link>
      <Link to="/blog">
        <Button variant="ghost">{t('nav.blog')}</Button>
      </Link>
    </>
  )
}
