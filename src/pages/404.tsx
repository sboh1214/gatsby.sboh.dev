import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout'

export default function NotFound(): JSX.Element {
  return (
    <Layout title="nav.notfound">
      <VStack>
        <Heading>404</Heading>
        <Divider />
        <Text>Page not found</Text>
      </VStack>
    </Layout>
  )
}
