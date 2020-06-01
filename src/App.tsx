import React from 'react'
import styled from 'styled-components'
import { BlogCard } from './components/blog-card'

const TestContainer = styled.div`
width: 100vw;
height: 100vh;
box-sizing: border-box;
padding: 5em 13rem;
background: black;
`

function App() {
  return (
    <TestContainer>
      <BlogCard
      tags={["node", 'ts']}
      timestamp='MAR 03, 2019'
      title="AWS SNS: Sending SMS Messages within Node.js APP"
      color="#654"
      briefing="One of the most common 
      features explained with a full example"
      />
    </TestContainer>
  );
}

export default App;
