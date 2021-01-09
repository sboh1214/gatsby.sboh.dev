import { Container, HStack, Text, useMediaQuery } from '@chakra-ui/react'
import i18next from '../i18n/config'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import Links from './navBar/links'
import NavBar from './navBar/NavBar'
import ThemeToggleButton from './navBar/ThemeToggleButton'
import SEO from './seo'

type Props = {
  title: string
  description?: string
  image?: string
  children: React.ReactNode
}

export default function Layout({ title, description, image, children }: Props) {
  const [isLarge] = useMediaQuery('(min-width: 560px)')

  return (
    <I18nextProvider i18n={i18next}>
      <SEO title={title} description={description} image={image} />
      <NavBar>
        <Links />
      </NavBar>
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
      {isLarge && <ThemeToggleButton isLarge={isLarge} />}
    </I18nextProvider>
  )
}
