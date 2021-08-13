import { Box, Heading, Image } from '@chakra-ui/react'
import Layout from '../components/layout'

type Props = {
  link: string
  title: string
  imgSrc: string
}

function Card(props: Props): JSX.Element {
  return (
    <Box
      onClick={() => {
        window.location.replace(props.link)
      }}
    >
      <Image src={props.imgSrc} maxW="120px" />
      <Heading>{props.title}</Heading>
    </Box>
  )
}

export default function About(): JSX.Element {
  return (
    <Layout title="nav.about">
      <Heading>Hello</Heading>
      <Card link="http://iasa.icehs.kr" title="IASA" imgSrc="IASA.png" />
      <Card link="https://kaist.ac.kr" title="KAIST" imgSrc="KAIST.png" />
    </Layout>
  )
}
