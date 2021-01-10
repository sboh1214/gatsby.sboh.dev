import React, { useState, useLayoutEffect } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostGrid from '../components/postGrid/postGrid'
import CategoryFilter from '../components/categoryFilter'
import useSiteMetadata from '../utils/useSiteMetadata'
import { IPost } from '../utils/type'
import { Heading } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

type Props = {
  pageContext: any
  data: any
}

export default function Home({ pageContext, data }: Props): JSX.Element {
  const { t } = useTranslation()
  const [posts, setPosts] = useState<IPost[]>([])
  const currentCategory = pageContext.category
  const postData = data.allMarkdownRemark.edges

  useLayoutEffect(() => {
    const filteredPostData = currentCategory ? postData.filter(({ node }: any) => node.fields.category === currentCategory) : postData

    filteredPostData.forEach(({ node }: any) => {
      const {
        id,
        excerpt,
        fields: { slug, category },
        frontmatter: { title, date },
      } = node

      setPosts((prevPost: IPost[]): IPost[] => [
        ...prevPost,
        {
          id,
          excerpt,
          slug,
          title,
          date,
          category,
        },
      ])
    })
  }, [currentCategory, postData])

  const site = useSiteMetadata()
  const postTitle = currentCategory || site.siteMetadata.postTitle

  return (
    <Layout title="Blog">
      <CategoryFilter categoryList={data.allMarkdownRemark.group} />
      <Heading>{t(`category.${postTitle ?? 'all'}`)}</Heading>
      <PostGrid posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: fields___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          excerpt(format: PLAIN)
          fields {
            slug
            category
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
