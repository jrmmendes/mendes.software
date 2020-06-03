import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './layouts/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { GhostLink } from './components/ghost-link'

import posts from './posts'

const Main = styled.main`
display: flex;
width: 100vw;
min-height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
background: black;
`

function App() {
  return (
    <Main>
      <PageSection title='Latest From Blog'>
        <BlogCardGroup cards={posts} />
        <Router>
          <GhostLink
            className='disabled'
            style={{ width: '14.4rem', marginTop: '2em' }}
            to="">
              All Posts (WIP)
          </GhostLink>
        </Router>
      </PageSection>
    </Main>
  );
}

export default App;
