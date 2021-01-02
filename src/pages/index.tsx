import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

export default function NotFound(): React.ReactNode {
  return (
    <Layout>
      <SEO title="Home" />
      <VStack>
        <Heading>Hello</Heading>
        <Divider />
        <Text>I'm Seungbin Oh</Text>
      </VStack>
    </Layout>
  )
}
