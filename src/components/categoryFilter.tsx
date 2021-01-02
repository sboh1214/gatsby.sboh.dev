import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import { ACTIVE } from '../constants/constants'
import { ICategory } from '../utils/type'
import { Button, Heading, HStack, Divider } from '@chakra-ui/react'

type Props = {
  categoryList: [ICategory]
}

type Current = {
  isCurrent: boolean
}

export default function CategoryFilter({ categoryList }: Props): JSX.Element {
  const ALL_CATEGORY_NAME = 'All'
  const isActive = ({ isCurrent }: Current) => (isCurrent ? { id: ACTIVE, tabIndex: -1 } : {})

  return (
    <HStack>
      <Heading size="sm">Category</Heading>
      <Link getProps={isActive} to="/">
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
            <Link key={fieldValue} getProps={isActive} to={`/category/${kebabCase(fieldValue)}/`}>
              <Button colorScheme="teal" variant="solid">
                {fieldValue}
              </Button>
            </Link>
          )
        })}
    </HStack>
  )
}
