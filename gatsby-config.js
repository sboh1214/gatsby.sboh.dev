const meta = {
  title: '오승빈(Seungbin Oh)',
  description: '오승빈(Seungbin Oh)의 개인 사이트',
  author: '오승빈(Seungbin Oh)',
  siteUrl: 'https://sboh.dev',
  lang: 'ko',
  utterances: 'sboh1214/sboh.dev',
  icon: 'src/images/icon.png',
}

module.exports = {
  siteMetadata: {
    title: meta.title,
    description: meta.description,
    author: meta.author,
    siteUrl: meta.siteUrl,
    lang: meta.lang,
    utterances: {
      repo: meta.utterances,
    },
    postTitle: 'All',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
                  'body[data-theme=dark]': 'Dark Github',
                },
              },
              extensions: ['vscode-theme-github-light', 'dark-theme-github'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
            },
          },
        ],
      },
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
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: meta.siteUrl,
        sitemap: `${meta.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '' }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-feed`,
  ],
}
