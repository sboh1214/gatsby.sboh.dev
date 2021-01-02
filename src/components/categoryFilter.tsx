import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { ICategory } from '../utils/type'
import { Button, Heading, HStack, Divider } from '@chakra-ui/react'

type Props = {
  categoryList: [ICategory]
}

export default function CategoryFilter({ categoryList }: Props): JSX.Element {
  const ALL_CATEGORY_NAME = 'All'

  return (
    <HStack>
      <Heading size="sm">Category</Heading>
      <Link to="/blog">
        <Button colorScheme="teal" variant="solid">
          {ALL_CATEGORY_NAME}
        </Button>
      </Link>
      <Divider orientation="vertical" />
      {categoryList
        .sort((a: ICategory, b: ICategory) => b.totalCount - a.totalCount)
        .map((category: ICategory) => {
          const { fieldValue } = category
          return (
            <Link key={fieldValue} to={`/blog/category/${kebabCase(fieldValue)}/`}>
              <Button colorScheme="teal" variant="solid">
                {fieldValue}
              </Button>
            </Link>
          )
        })}
    </HStack>
  )
}
