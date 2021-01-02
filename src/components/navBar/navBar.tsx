import * as React from 'react'
import { Box, Heading, HStack, useColorMode } from '@chakra-ui/react'

type Props = {
  title: JSX.Element
  children: JSX.Element
}

export default function NavBar({ title, children }: Props): JSX.Element {
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(29, 29, 29, 0.7)'}
      borderBottomColor={colorMode === 'light' ? 'rgba(200, 200, 200, 0.7)' : 'rgba(255, 255, 255, 0.2)'}
      borderBottomWidth="1px"
      style={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      minW="540px"
      h="54px"
      top="0"
      left="0"
      position="sticky"
      zIndex={10}
      aria-label="Global Navigation"
    >
      <HStack padding="6px">
        <Heading as="h1" size="md">
          {title}
        </Heading>
        {children}
      </HStack>
    </Box>
  )
}
