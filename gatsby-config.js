const meta = {
  title: '오승빈의 개발 블로그', // Your website title
  description: '오승빈의 개발 블로그', // Your website description
  author: '오승빈', // Maybe your name
  siteUrl: 'https://blog.sboh.dev', // Your website URL
  lang: 'ko', // Language
  utterances: 'sboh1214/blog.sboh.dev', // Github repository to store comments
  links: {
    github: 'https://github.com/sboh1214/blog.sboh.dev' // Your github repository
  },
  icon: 'src/images/icon.png' //  Favicon Path
}

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    utterances: {
      repo: meta.utterances
    },
    postTitle: 'All',
    menuLinks: [
      {
        link: '/',
        name: 'Home'
      },
      {
        link: '/about/',
        name: 'About'
      },
      {
        link: meta.links.github,
        name: 'Github'
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Github Light Theme',
                parentSelector: {
                  'body[data-theme=dark]': 'Dark Github'
                }
              },
              extensions: ['vscode-theme-github-light', 'dark-theme-github']
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name: meta.title,
        description: meta.description,
        lang: meta.lang,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: meta.icon,
        icon_options: {
          purpose: `any maskable`
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: meta.siteUrl,
        sitemap: `${meta.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }]
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-alias-imports`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`
  ]
}
