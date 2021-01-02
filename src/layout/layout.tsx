import React from 'react'
import NavBar from '../components/navBar/navBar'
import { ChakraProvider, Container, HStack, Link, Text } from '@chakra-ui/react'
import ThemeToggleButton from '../components/navBar/themeToggleButton'

type Props = {
  children: React.ReactNode
}

const styledTheme = {
  device: {
    xs: '419px',
    sm: '767px',
    md: '1023px',
    lg: '1441px',
  },
}

export default function Layout({ children }: Props) {
  const copyrightStr = `Copyright © Seungbin Oh. Built with `
  const repoName = 'gatsby-starter-apple'
  const repoSrc = 'https://github.com/sungik-choi/gatsby-starter-apple'

  return (
    <ChakraProvider>
      <NavBar />
      <Container maxW="1024px">{children}</Container>
      <Container centerContent>
        <HStack aria-label="Copyright">
          <Text fontSize="md">
            {copyrightStr}
            <Link href={repoSrc} target="__blank" isExternal>
              {repoName}
            </Link>
          </Text>
        </HStack>
      </Container>
      <ThemeToggleButton />
    </ChakraProvider>
  )
}
