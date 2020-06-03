import React from 'react'
import styled from 'styled-components'
import { BlogCardProps, BlogCard } from '../blog-card/blog-card'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  > * {
    width: 14rem;
  }
`

type Props = {
  cards: BlogCardProps[];
}

export default function BlogCardGroup(props: Props) {
  return (
    <Wrapper>
    { props.cards.map((card: BlogCardProps, i) => (
      <BlogCard
        key={i}
        {...card}
      />
    )) }
    </Wrapper>
  )
}
