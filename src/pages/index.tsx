import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default function Index(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Layout title={t('nav.home')}>
      <VStack>
        <Heading>Hello</Heading>
        <Divider />
        <Text>I'm Seungbin Oh</Text>
      </VStack>
    </Layout>
  )
}
