import React from 'react'
import styled from 'styled-components'

type PageSectionProps = {
  children: any;
  title: string;
  id: string;
}

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  font-weight: 300;
  @media (max-width: 1000px) {
    text-align: center;
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  @media (min-width: 500px) {
    padding: 1rem 6rem;
  }
`

export default function (props: PageSectionProps) {
  return (
    <Container id={props.id}>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  ) 
}
