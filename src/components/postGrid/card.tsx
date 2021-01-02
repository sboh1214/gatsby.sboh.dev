import React from 'react'
import { ICard } from '../../utils/type'
import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import CenteredImg from './centeredImg'

export default function Card({ thumbnail, alt, category, title, desc, date }: ICard): JSX.Element {
  return (
    <Box borderWidth="1px" borderRadius="xl" overflow="hidden">
      <CenteredImg src={thumbnail} alt={alt} />
      <VStack>
        <Text>{category}</Text>
        <Heading>{title}</Heading>
        <Text>{desc}</Text>
        <Text>{date}</Text>
      </VStack>
    </Box>
  )
}
