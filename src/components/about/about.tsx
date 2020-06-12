import React from 'react'
import profile from './profile.png'
import styled from 'styled-components'

type AboutProps = {
  description: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media (min-width: 950px) {
    flex-direction: row;
    padding-left: 4rem;
    padding-right: 4rem;
  }
`


export default (props: AboutProps) => (
  <Wrapper>
    <img alt="Jr. Mendes" src={profile} />
    <div style={{
      paddingLeft: '2em',
      width: '80%',
    }}>
      <h1 style={{
        fontWeight: 300,
        fontSize: '2rem',
      }}>About Me</h1>
      <p style={{
        fontSize: '1.2em',
      }}>{props.description}</p>
    </div>
  </Wrapper>
) 
