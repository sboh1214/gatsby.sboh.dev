const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
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
      name: 'blogPath',
      value: `/blog${relativeFilePath}`,
    })
    createNodeField({
      node,
      name: 'category',
      value: `${relativeFilePath.split('/')[1]}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogListTemplate = path.resolve(`./src/pages/blog.tsx`)
  const blogPostTemplate = path.resolve(`./src/templates/blogPost.tsx`)

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }, limit: 2000) {
        edges {
          node {
            fields {
              blogPath
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

  const posts = result.data.postsRemark.edges

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.blogPath,
      component: blogPostTemplate,
      context: { blogPath: node.fields.blogPath },
    })
  })

  const categories = result.data.categoriesGroup.group

  categories.forEach((category) => {
    createPage({
      path: `blog/category/${category.fieldValue}`,
      component: blogListTemplate,
      context: {
        category: category.fieldValue,
      },
    })
  })
}
