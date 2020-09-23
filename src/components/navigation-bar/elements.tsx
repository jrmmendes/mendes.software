import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Header = styled.header`
  transition: all 200ms ease-in-out;
  position: relative;
  z-index: 1000;
  display: flex;
  background: rgba(0,0,0,0);
  &.is-nav-open, &.is-scrolled {
    transition: all 200ms ease-in-out;
    background: rgba(0,0,0);
  }
  height: 5vh;
  justify-content: space-between;
  padding: 2rem 2rem;
  @media (min-width: 500px) {
    padding: 2rem 6rem;
  }
`

export const Navigation = styled.nav`
  transition: all 300ms ease-in-out;
  transform-origin: top;
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-block-start: 4em;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
  height: 100vh;
  transform: translateY(-100vh);
  &.is-nav-open {
    transition: all 400ms ease-in-out;
    opacity: 1;
    transform: translateY(0);
    z-index: 1;
  }
`

export const NavLink = styled(AnchorLink)`
  transition: all 200ms ease-in-out;
  color: white;
  font-size: 3rem;
  margin: 0.2em;
  text-decoration: none;
  &:hover {
    transition: all 200ms ease-in-out;
    transform: scale(1.05);
  }
`
