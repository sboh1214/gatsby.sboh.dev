export interface MdxPageQuery {
  data: {
    mdx: {
      body: any
      frontmatter: {
        title: string
      }
    }
  }
}

export interface MdxPageNode {
  node: {
    id: string
    fields: {
      path: string
    }
    frontmatter: {
      title: string
    }
    excerpt: string
  }
}

export interface AllMdxPageData {
  allMdx: {
    totalCount: number
    edges: [MdxPageNode]
  }
}

export interface AllMdxPageQuery {
  data: AllMdxPageData
}
