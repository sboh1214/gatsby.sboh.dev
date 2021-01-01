import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import NavBar from '../components/navBar/navBar'
import useSiteMetadata from '../hooks/useSiteMetadata'
import GlobalStyle from '../styles/globalStyle'
import { useColorMode } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

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

const Layout = ({ children }: Props) => {
  const { toggleColorMode } = useColorMode()
  const site = useSiteMetadata()
  const { title, author } = site.siteMetadata
  const copyrightStr = `Copyright © ${author}. Built with `
  const repoName = 'gatsby-starter-apple'
  const repoSrc = 'https://github.com/sungik-choi/gatsby-starter-apple'

  return (
    <ChakraProvider>
      <ThemeProvider theme={styledTheme}>
        <GlobalStyle />
        <Container>
          <NavBar title={title} themeToggler={toggleColorMode} />
          {children}
        </Container>
        <Footer role="contentinfo">
          <Copyright aria-label="Copyright">
            {copyrightStr}
            <RepoLink href={repoSrc} target="__blank">
              {repoName}
            </RepoLink>
          </Copyright>
        </Footer>
      </ThemeProvider>
    </ChakraProvider>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - var(--footer-height));
  background-color: var(--color-post-background);
`

const Footer = styled.footer`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  background-color: var(--color-gray-1);
`

const Copyright = styled.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  color: var(--color-gray-6);
`

const RepoLink = styled.a`
  color: var(--color-blue);
  &:hover {
    text-decoration: underline;
  }
`

export default Layout
