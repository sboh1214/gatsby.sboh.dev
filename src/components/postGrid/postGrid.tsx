import React, { useRef } from 'react'
import { Link } from 'gatsby'
import Card from './card'
import useInfiniteScroll from './useInfiniteScroll'
import { IPost } from '../../utils/type'
import { SimpleGrid } from '@chakra-ui/react'

type Props = {
  posts: IPost[]
}

export default function PostGrid({ posts }: Props): JSX.Element {
  const scrollEdgeRef = useRef(null)
  const currentList = useInfiniteScroll({
    posts,
    scrollEdgeRef,
    maxPostNum: 10,
    offsetY: 200,
  })

  return (
    <SimpleGrid minChildWidth="360px" spacing="24px" role="list">
      {currentList.map((data: IPost) => {
        const { id, slug, title, date, category } = data
        const ariaLabel = `${title} - ${category} - Posted on ${date}`
        return (
          <Link to={slug} aria-label={ariaLabel} key={id}>
            <Card category={category.fieldValue} title={title} date={date} />
          </Link>
        )
      })}
      <div ref={scrollEdgeRef} />
    </SimpleGrid>
  )
}
