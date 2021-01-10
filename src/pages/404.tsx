import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default function NotFound(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Layout title={t('nav.notfound')}>
      <VStack>
        <Heading>404</Heading>
        <Divider />
        <Text>Page not found</Text>
      </VStack>
    </Layout>
  )
}
