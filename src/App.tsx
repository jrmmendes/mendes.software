import React from 'react'
import styled from 'styled-components'

import { PageSection } from './layouts/page-section'

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
      </PageSection>
    </Main>
  );
}

export default App;
