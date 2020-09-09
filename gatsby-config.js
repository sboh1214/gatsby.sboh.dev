const name = 'Platypus Dev Blog'
const url = 'https://sboh1214.github.io/'

module.exports = {
  siteMetadata: {
    title: name,
    description: 'sboh1214.github.io',
    keywords: 'gatsbyjs, gatsby, javascript, seungbin',
    siteUrl: url,
    author: {
      name: 'Seungbin Oh',
      url,
      email: 'sboh1214@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`]
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/templates/post.tsx'),
          default: require.resolve('./src/templates/post.tsx')
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-images'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-147173530-1'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name,
        short_name: name,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/icon.png`
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: url,
        sitemap: `${url}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }]
      }
    }
  ]
}
