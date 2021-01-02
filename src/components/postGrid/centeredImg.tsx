import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Box } from '@chakra-ui/react'

type Props = {
  src: string
  alt: string
}

export default function CenteredImg({ src, alt }: Props): JSX.Element {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find((edge: any) => edge.node.id === src)

  if (!alt) alt = 'Thumbnail Image'

  return (
    <Box>
      <Img alt={alt} fluid={{ ...image.node.fluid, aspectRatio: 16 / 9 }} />
    </Box>
  )
}
