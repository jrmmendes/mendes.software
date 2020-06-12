import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './components/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { OutlinedButton } from './components/button'

import { NavigationBar } from './components/navigation-bar'
import { HeroBanner } from './components/hero-banner'
import { About } from './components/about'
import { Footer } from './components/footer'

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
        <About description="
        Hi! My name is Junior, I'm a back-end web developer with 1 year of experience with Javascript and Node.js, and also some Django background (making use of Django REST Framework). I love DevOps and Open Source, so I've been using Linux for about 5 years and studying about Docker, CI/CD. I'm constantly trying to improve my knowledge."
        />
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
  <Footer />
</>
)

export default App;
