import React from 'react'
import profile from './profile.png'

type AboutProps = {
  description: string;
}

export default (props: AboutProps) => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '4rem',
    paddingRight: '4rem',
    color: 'white',
  }}>
    <img src={profile} />
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
  </div>
) 
