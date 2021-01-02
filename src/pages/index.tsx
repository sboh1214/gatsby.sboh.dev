import React, { useState, useLayoutEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import SEO from '../components/seo'
import PostGrid from '../components/postGrid/postGrid'
import CategoryFilter from '../components/categoryFilter'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { IPost } from '../utils/type'
import { Heading } from '@chakra-ui/react'

interface Props {
  pageContext: any
  data: any
}

export default function Home({ pageContext, data }: Props): React.ReactNode {
  const [posts, setPosts] = useState<IPost[]>([])
  const currentCategory = pageContext.category
  const postData = data.allMarkdownRemark.edges

  useLayoutEffect(() => {
    const filteredPostData = currentCategory ? postData.filter(({ node }: any) => node.frontmatter.category === currentCategory) : postData

    filteredPostData.forEach(({ node }: any) => {
      const {
        id,
        fields: { slug },
        frontmatter: {
          title,
          desc,
          date,
          category,
          thumbnail: { childImageSharp },
          alt,
        },
      } = node

      setPosts((prevPost: IPost[]): IPost[] => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          alt,
        },
      ])
    })
  }, [currentCategory, postData])

  const site = useSiteMetadata()
  const postTitle = currentCategory || site.siteMetadata.postTitle

  return (
    <Layout>
      <SEO title="Home" />
      <CategoryFilter categoryList={data.allMarkdownRemark.group} />
      <Heading>{postTitle}</Heading>
      <PostGrid posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
