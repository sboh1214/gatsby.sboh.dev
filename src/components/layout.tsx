import { ChakraProvider, Container, HStack, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'
import Links from './navBar/links'
import NavBar from './navBar/navBar'
import ThemeToggleButton from './navBar/themeToggleButton'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <ChakraProvider>
      <NavBar title={<Link to="/">오승빈의 개발 블로그</Link>}>
        <Links />
      </NavBar>
      <Container maxW="1024px">{children}</Container>
      <Container centerContent>
        <HStack aria-label="Copyright">
          <Text fontSize="md">
            {`Copyright © Seungbin Oh. Built with `}
            <a href="https://github.com/sungik-choi/gatsby-starter-apple" target="__blank">
              'gatsby-starter-apple'
            </a>
          </Text>
        </HStack>
      </Container>
      <ThemeToggleButton />
    </ChakraProvider>
  )
}
