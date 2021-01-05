import { ChakraProvider, Container, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Links from './navBar/links'
import NavBar from './navBar/navBar'
import ThemeToggleButton from './navBar/themeToggleButton'
import SEO from './seo'

type Props = {
  title: string
  description?: string
  image?: string
  children: React.ReactNode
}

export default function Layout({ title, description, image, children }: Props) {
  return (
    <ChakraProvider>
      <SEO title={title} description={description} image={image} />
      <NavBar>
        <Links />
      </NavBar>
      <Container maxW="1280px">
        <Heading>{title}</Heading>
        {children}
      </Container>
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
