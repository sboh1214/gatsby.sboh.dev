import { Container, HStack, Text } from '@chakra-ui/react'
import i18next from '../i18n/config'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import NavBar from './navBar/navBar'
import SEO from './seo'

type Props = {
  title: string
  description?: string
  image?: string
  children: React.ReactNode
}

export default function Layout({ title, description, image, children }: Props) {
  return (
    <I18nextProvider i18n={i18next}>
      <SEO title={title} description={description} image={image} />
      <NavBar />
      <Container maxW="1024px">{children}</Container>
      <Container centerContent>
        <HStack aria-label="Copyright">
          <Text fontSize="md">
            {'Copyright © '}
            <a href="mailto:sboh1214@gmail.com" target="_top">
              Seungbin Oh
            </a>
            {'. Built with '}
            <a href="https://github.com/sungik-choi/gatsby-starter-apple" target="__blank">
              'gatsby-starter-apple'
            </a>
          </Text>
        </HStack>
      </Container>
    </I18nextProvider>
  )
}
