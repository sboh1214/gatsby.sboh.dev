import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default function About(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Layout title={t('nav.about')}>
      <Heading>Hello</Heading>
    </Layout>
  )
}
