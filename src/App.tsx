import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import { PageSection } from './components/page-section'
import { BlogCardGroup } from './components/blog-card-group'
import { OutlinedButton } from './components/button'

import { NavigationBar } from './components/navigation-bar'
import { HeroBanner } from './components/hero-banner'
import { About } from './components/about'
import { Footer } from './components/footer'
import { BlogCardProps } from './components/blog-card/blog-card'
import { articleToBlogCard } from './dev.to/utils'

const Main = styled.main`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
max-width: 1320px;
margin: auto;
box-sizing: border-box;
margin: 0;
padding: 0;
background: black;
`

const initialPosts: BlogCardProps[] = []

const App = () => {
  const [posts, setPosts] = useState(initialPosts)

  useEffect(() => {
    fetch('https://dev.to/api/articles/?username=dotmendes&per_page=4')
    .then(response => response.json())
    .then(data => articleToBlogCard(data))
    .then(data => setPosts(data))
  }, [])

  console.log(posts);

  return (
    <>
      <NavigationBar />
      <HeroBanner />
      <Main>
        <PageSection id="about" title="">
          <About description="
          Hi! My name is Junior and I'm a back-end web developer with almost 3 years of
          experience coding Node.js and Django applications. I'm constantly trying to 
          improve my knowledge and currently studying about the AWS and Azure cloud services."
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
}

export default App;
