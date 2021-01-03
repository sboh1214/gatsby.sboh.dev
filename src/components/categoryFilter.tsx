import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { ICategory } from '../utils/type'
import { Button, Heading, Divider, Wrap } from '@chakra-ui/react'

type Props = {
  categoryList: [ICategory]
}

export default function CategoryFilter({ categoryList }: Props): JSX.Element {
  return (
    <Wrap>
      <Heading alignSelf="center" size="sm">
        Category
      </Heading>
      <Divider orientation="vertical" />
      <Link to="/blog">
        <Button colorScheme="teal" variant="solid" margin="6px">
          All
        </Button>
      </Link>
      <Divider orientation="vertical" />
      {categoryList
        .sort((a: ICategory, b: ICategory) => b.totalCount - a.totalCount)
        .map((category: ICategory) => {
          const { fieldValue } = category
          return (
            <Link key={fieldValue} to={`/blog/category/${kebabCase(fieldValue)}/`}>
              <Button colorScheme="teal" variant="solid" margin="6px">
                {fieldValue}
              </Button>
            </Link>
          )
        })}
    </Wrap>
  )
}
