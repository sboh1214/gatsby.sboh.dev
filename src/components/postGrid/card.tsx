import React from 'react'
import { ICard } from '../../utils/type'
import { Box, Heading, VStack, Text } from '@chakra-ui/react'

export default function Card({ category, title, date }: ICard): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="xl" overflow="hidden">
      <VStack>
        <Text>{category}</Text>
        <Heading>{title}</Heading>
        <Text>{date}</Text>
      </VStack>
    </Box>
  )
}
