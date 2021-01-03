import { Heading, Text, Divider, VStack } from '@chakra-ui/react'
import React from 'react'
import Layout from '../components/layout'

export default function Index(): JSX.Element {
  return (
    <Layout title="Home">
      <VStack>
        <Heading>Hello</Heading>
        <Divider />
        <Text>I'm Seungbin Oh</Text>
      </VStack>
    </Layout>
  )
}
