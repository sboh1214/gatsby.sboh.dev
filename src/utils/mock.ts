import { StaticQuery } from 'gatsby'

export const mockStaticQuery = () => {
  StaticQuery.mockImplementationOnce(({ render }: any) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`
        }
      }
    })
  )
}
