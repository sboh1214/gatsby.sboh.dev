import * as React from 'react'
import { Link } from 'gatsby'
import Container from '../components/Container'

const Code404 = () => (
  <Container>
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </Container>
)

export default Code404
