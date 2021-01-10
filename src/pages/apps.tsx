import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default function Apps(): JSX.Element {
  const { t } = useTranslation()

  return <Layout title={t('nav.apps')}>Under construction</Layout>
}
