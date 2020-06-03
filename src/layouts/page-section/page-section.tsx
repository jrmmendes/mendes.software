import React from 'react'
import styled from 'styled-components'

type PageSectionProps = {
  children: any;
  title: string;
}

const Title = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 1rem 6rem;
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
