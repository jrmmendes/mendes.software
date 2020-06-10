import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './components/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { OutlinedButton } from './components/button'

import { NavigationBar } from './components/navigation-bar'
import { HeroBanner } from './components/hero-banner'
import { About } from './components/about'

import posts from './posts'

const Main = styled.main`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
box-sizing: border-box;
margin: 0;
padding: 0;
background: black;
`

const App = () => (
  <>
    <NavigationBar />
    <HeroBanner />
    <Main>
      <PageSection id="about" title="">
        <About description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"/>
      </PageSection>
      <PageSection id="blog" title='Latest From Blog'>
        <BlogCardGroup cards={posts} />
        <Router>
          <OutlinedButton
            href="https://dev.to/dotmendes/"
            target="_NEW"
            style={{
              width: '14.4rem',
              marginTop: '2em',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}>
          All Posts
        </OutlinedButton>
      </Router>
    </PageSection>
  </Main>
</>
)

export default App;
