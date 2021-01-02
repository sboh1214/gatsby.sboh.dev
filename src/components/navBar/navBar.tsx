import React from 'react'
import { Link } from 'gatsby'
import LinkList from './linkList'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import { Box, Heading, HStack, useColorMode } from '@chakra-ui/react'

export default function NavBar(): JSX.Element {
  const site = useSiteMetadata()
  const { menuLinks } = site.siteMetadata
  const { colorMode } = useColorMode()

  return (
    <Box
      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(29, 29, 29, 0.7)'}
      borderBottomColor={colorMode === 'light' ? 'rgba(200, 200, 200, 0.7)' : 'rgba(255, 255, 255, 0.2)'}
      borderBottomWidth="1px"
      style={{ backdropFilter: 'blur(10px)' }}
      w="100%"
      h="54px"
      top="0"
      left="0"
      position="sticky"
      zIndex={10}
      aria-label="Global Navigation"
    >
      <HStack padding="6px">
        <Heading as="h1" size="md">
          <Link to="/">오승빈의 개발 블로그</Link>
        </Heading>
        <LinkList links={menuLinks} />
      </HStack>
    </Box>
  )
}
