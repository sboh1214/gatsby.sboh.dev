import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
// import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledFooter = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${colors.white};
`

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const Header = () => (
  <StyledFooter>
    <FooterInner>
      <a href="https://github.com/sboh1214/sboh1214.github.io/workflows/Gatsby%20Publish">
        <img src="https://github.com/sboh1214/sboh1214.github.io/workflows/Gatsby%20Publish/badge.svg" alt="" />
      </a>
      <a href="https://github.com/sboh1214/sboh1214.github.io/workflows/Test">
        <img src="https://github.com/sboh1214/sboh1214.github.io/workflows/Test/badge.svg" alt="" />
      </a>
      <a href="https://codecov.io/gh/sboh1214/sboh1214.github.io">
        <img src="https://codecov.io/gh/sboh1214/sboh1214.github.io/branch/master/graph/badge.svg" alt="" />
      </a>
    </FooterInner>
  </StyledFooter>
)

export default Header
