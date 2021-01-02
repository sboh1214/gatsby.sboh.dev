import { useStaticQuery, graphql } from 'gatsby'
import { ISite } from '../utils/type'

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
            postTitle
          }
        }
      }
    `
  )
  return site
}

export default useSiteMetadata
