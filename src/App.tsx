import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './layouts/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { GhostLink } from './components/ghost-link'

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
        <BlogCardGroup cards={[
          {
            title: 'Complete Dokku Setup with Digital Ocean and Netlify DNS',
            tags: ['test', 'tsx'],
            color: '#3B5074',
            briefing: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
            timestamp: '10 MAR, 2010',
            link: 'https://google.com/'
          },
          {
            title: 'Complete Dokku Setup with Digital Ocean and Netlify DNS',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
            timestamp: '10 MAR, 2010',
            link: 'https://google.com/'
          },
          {
            title: 'Complete Dokku Setup with Digital Ocean and Netlify DNS',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
            timestamp: '10 MAR, 2010',
            link: 'https://google.com/'
          },
          {
            title: 'Complete Dokku Setup with Digital Ocean and Netlify DNS',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
            timestamp: '10 MAR, 2010',
            link: 'https://google.com/'
          },
        ]} />
        <Router>
          <GhostLink style={{ width: '14.4rem', marginTop: '2em' }}to="/blog"> All Posts </GhostLink>
        </Router>
      </PageSection>
    </Main>
  );
}

export default App;
