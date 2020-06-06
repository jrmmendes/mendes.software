import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Header = styled.header`
  display: flex;
  background: black;
  height: 5vh;
  justify-content: space-between;
  padding: 2rem 2rem;
  @media (min-width: 500px) {
    padding: 2rem 6rem;
  }
`

export const Navigation = styled.nav`
  transition: all 200ms ease-in-out;
  transform-origin: top;
  display: flex;
  background: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateY(-100vh);
  height: 0;
  opacity: 0;
  &.is-nav-open {
    opacity: 1;
    height: 100vh;
    transition: all 200ms ease-in-out;
    transform: translateY(0);
  }
`

export const NavLink = styled(Link)`
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
