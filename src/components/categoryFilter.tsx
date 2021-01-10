import React from 'react'
import { Link } from 'gatsby'
import { ICategory } from '../utils/type'
import { Heading, Divider, Wrap, Tag, TagLabel } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

type Props = {
  categoryList: [ICategory]
}

export default function CategoryFilter({ categoryList }: Props): JSX.Element {
  const { t } = useTranslation()

  return (
    <Wrap margin="6px">
      <Heading alignSelf="center" size="sm">
        {t('category.name')}
      </Heading>
      <Divider orientation="vertical" />
      <Link to="/blog">
        <Tag size="lg" borderRadius="full" variant="outline" colorScheme="green">
          <TagLabel>{t('category.all')}</TagLabel>
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
                <TagLabel>{t(`category.${fieldValue}`)}</TagLabel>
              </Tag>
            </Link>
          )
        })}
    </Wrap>
  )
}
