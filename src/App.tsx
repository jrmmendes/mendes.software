import React from 'react'
import styled from 'styled-components'
import { GhostLink } from './components/ghost-link'
import { BrowserRouter as Router } from 'react-router-dom'

const TestContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
box-sizing: border-box;
padding: 5em 5rem;
background: black;
`

function App() {
  return (
    <TestContainer>
      <Router>
        <GhostLink to="#">
          Click me
        </GhostLink>
      </Router>
    </TestContainer>
  );
}

export default App;
