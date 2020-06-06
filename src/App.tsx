import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './layouts/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { GhostLink } from './components/ghost-link'

import { NavigationBar } from './layouts/navigation-bar'
import { HeroBanner } from './layouts/hero-banner'

import posts from './posts'

const Main = styled.main`
display: flex;
width: 100%;
min-height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
background: black;
`

function App() {
  return (
    <>
      <NavigationBar />
      <HeroBanner />
      <Main>
        <PageSection id="about" title='Latest From Blog'>
          <BlogCardGroup cards={posts} />
          <Router>
            <GhostLink
              className='disabled'
              style={{
                width: '14.4rem',
                marginTop: '2em',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              to="">
              All Posts (WIP)
            </GhostLink>
          </Router>
        </PageSection>
      </Main>
    </>
  )
}

export default App;
