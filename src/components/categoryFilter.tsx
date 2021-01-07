import React from 'react'
import { Link } from 'gatsby'
import { ICategory } from '../utils/type'
import { Heading, Divider, Wrap, Tag, TagLabel } from '@chakra-ui/react'

type Props = {
  categoryList: [ICategory]
}

export default function CategoryFilter({ categoryList }: Props): JSX.Element {
  return (
    <Wrap margin="6px">
      <Heading alignSelf="center" size="sm">
        Category
      </Heading>
      <Divider orientation="vertical" />
      <Link to="/blog">
        <Tag size="lg" borderRadius="full" variant="outline" colorScheme="green">
          <TagLabel>All</TagLabel>
        </Tag>
      </Link>
      <Divider orientation="vertical" />
      {categoryList
        .sort((a: ICategory, b: ICategory) => b.totalCount - a.totalCount)
        .map((category: ICategory) => {
          const { fieldValue } = category
          return (
            <Link key={fieldValue} to={`/blog/category/${fieldValue}/`}>
              <Tag size="lg" borderRadius="full" variant="outline" colorScheme="green">
                <TagLabel>{fieldValue}</TagLabel>
              </Tag>
            </Link>
          )
        })}
    </Wrap>
  )
}
