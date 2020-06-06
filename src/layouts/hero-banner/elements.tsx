import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const VideoBackground = styled.video`
pointer-events: none;
position: absolute;
top: 0;
right: 0;
margin: 0;
z-index: -1;
align-self: center;
@media (max-width: 1000px) {
  height: 100%;
}
@media (min-width: 1000px) {
  width: 100%;
}
`

export const Presentation = styled.hgroup`
overflow: hidden;
text-align: center;
padding-top: 5rem;
width: 20rem;
h1, h2, h3 {
  color: white;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 2.3em;
  }
}
h3 {
  font-size: 1em;
  margin-top: 1.3em;
}
strong {
  font-weight: 300;
  display: inline-flex;
  background: #0074E8;
  color: white;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 96%);
  padding: 0.1em;
}`

export const DownArrowLink = styled(Link)`
display: inline-flex;
justify-content: center;
align-items: center;
width: 3rem;
height: 3rem;
border: 0.05em solid white;
border-radius: 50%;
transition: all 200ms ease-in-out;
stroke: white;
&:hover {
  stroke: black;
  background: white;
  transition: all 200ms ease-in-out;
}
`
