import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '..'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <h2>Board To Note</h2>
        <a href="https://github.com/sboh1214/BoardToNote-Android">
          <img src="https://github.com/sboh1214/BoardToNote-Android/workflows/Android/badge.svg" alt="Android" />
        </a>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
