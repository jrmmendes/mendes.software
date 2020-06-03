import React from 'react'
import styled from 'styled-components'

import { PageSection } from './layouts/page-section'
import { BlogCardGroup } from './components/blog-card-group'

const Main = styled.main`
display: flex;
width: 100vw;
height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
background: black;
`

function App() {
  return (
    <Main>
      <PageSection title='Test Section'>
        <BlogCardGroup cards={[
          {
            title: 'Complete Dokku Setup with Digital Ocean and Netlify DNS',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet,',
            timestamp: '10 MAR, 2010'
          },
          {
            title: 'test',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet,',
            timestamp: '10 MAR, 2010'
          },
          {
            title: 'test',
            tags: ['test', 'tsx'],
            color: '#FFF',
            briefing: 'Lorem ipsum dolor sit amet,',
            timestamp: '10 MAR, 2010'
          },
          {
            title: 'test',
            tags: ['test', 'tsx'],
            color: '#0FF',
            briefing: 'Lorem ipsum dolor sit amet,',
            timestamp: '10 MAR, 2010'
          },
        ]} />
      </PageSection>
    </Main>
  );
}

export default App;
