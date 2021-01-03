import { useStaticQuery, graphql } from 'gatsby'
import { ISite } from './type'

const useSiteMetadata = () => {
  const { site }: ISite = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            lang
            utterances {
              repo
            }
          }
        }
      }
    `
  )
  return site
}

export default useSiteMetadata
