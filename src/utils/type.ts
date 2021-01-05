export interface ISite {
  site: {
    siteMetadata: ISiteMetadata
  }
}
export interface ISiteMetadata {
  title: string
  description: string
  author: string
  siteUrl: string
  lang: string
  utterances: {
    repo: string
  }
  postTitle: string
  menuLinks: {
    name: string
    link: string
  }
}

export interface IData {
  postsRemark: {
    edges: [
      {
        node: {
          fields: {
            slug: string
            category: string
          }
          frontmatter: {
            title: string
            date: string
          }
        }
      }
    ]
  }
  categoriesGroup: {
    group: [ICategory]
  }
}

export interface IPost {
  id: any
  excerpt: string
  slug: string
  title: string
  date: any
  category: ICategory
}

export interface ICard {
  category: string
  title: string
  date: any
  excerpt: string
}

export interface ICategory {
  fieldValue: string
  totalCount: number
}
