import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default function Libs(): JSX.Element {
  const { t } = useTranslation()

  return <Layout title={t('nav.libs')}>Under construction</Layout>
}
