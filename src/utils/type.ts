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

export interface IPost {
  id: any
  blogPath: string
  title: string
  date: any
  category: ICategory
}

export interface ICard {
  category: string
  title: string
  date: any
}

export interface ICategory {
  fieldValue: string
  totalCount: number
}
