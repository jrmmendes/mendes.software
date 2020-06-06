import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { VideoBackground, Presentation, DownArrowLink } from './elements'
import Video from './coding.mp4'

export default () => {
  return (
    <header style={{
      padding: 0,
      height: '100vh',
      background: 'rgba(0, 0, 0, 0.9)',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <VideoBackground
        loop
        autoPlay
        muted
        src={Video}
      />
      <Presentation>
        <h1> Hello, I’m Júnior. </h1>
        <h2> My job is to make your business and software <strong>reliable</strong> </h2>
        <h3> Please allow me to introduce myself.</h3>
      </Presentation>
      <Router>
        <DownArrowLink style={{ marginTop: '2rem' }} to="/">
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L10 10L19 1"/>
          </svg>
        </DownArrowLink>
      </Router>
    </header>
  )
}
