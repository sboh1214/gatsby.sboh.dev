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
  slug: any
  title: any
  desc: any
  date: any
  category: ICategory
  thumbnail: any
  alt: any
}

export interface ICard {
  thumbnail: any
  alt: any
  category: any
  title: any
  desc: any
  date: any
}

export interface ICategory {
  fieldValue: string
  totalCount: number
}
