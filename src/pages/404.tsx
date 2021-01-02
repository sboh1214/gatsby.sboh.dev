import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default function NotFound(): React.ReactNode {
  return (
    <Layout>
      <SEO title="Not found" />
      <VStack>
        <Heading>404</Heading>
        <Divider />
        <Text>Page not found</Text>
      </VStack>
    </Layout>
  )
}
