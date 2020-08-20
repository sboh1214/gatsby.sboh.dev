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
        path: `${__dirname}/src/contents`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
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
    'gatsby-plugin-react-helmet',
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
        icon: `src/icon.png`,
        cache_busting_mode: 'none'
      }
    },
    'gatsby-plugin-offline',
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
