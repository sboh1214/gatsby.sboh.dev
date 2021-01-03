import { GatsbyNode } from 'gatsby'
import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { IData } from './type'

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'contents',
      trailingSlash: false,
    })

    createNodeField({
      node,
      name: 'slug',
      value: `/blog${relativeFilePath}`,
    })
    createNodeField({
      node,
      name: 'category',
      value: `${relativeFilePath.split('/')[1]}`,
    })
  }
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve(`src/pages/blog.tsx`)
  const blogPostTemplate = path.resolve(`src/templates/blogPost.tsx`)

  const result = await graphql<IData>(`
    {
      postsRemark: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 2000) {
        edges {
          node {
            fields {
              slug
              category
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: fields___category) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const posts = result.data?.postsRemark.edges

  posts?.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: { slug: node.fields.slug },
    })
  })

  const categories = result.data?.categoriesGroup.group

  categories?.forEach((category) => {
    createPage({
      path: `blog/category/${category.fieldValue}`,
      component: blogListTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}
