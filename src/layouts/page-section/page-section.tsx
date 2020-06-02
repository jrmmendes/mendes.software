import React from 'react'
import styled from 'styled-components'

type PageSectionProps = {
  children: any;
  title: string;
}

const Title = styled.h1`
  color: white;
  font-weight: 300;
`

const Container = styled.section`
  margin: 0;
  padding: 1rem 4rem;
  width: 100%;
`

export default function (props: PageSectionProps) {
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  ) 
}
