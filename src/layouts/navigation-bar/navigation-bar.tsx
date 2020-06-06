import React, {useState} from 'react'
import styled from 'styled-components'
import HamburgerMenu from 'react-hamburger-menu'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Navigation, NavLink, Header } from './elements'
import logo from './brand.svg'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  color: white;
`

const Burger = styled(HamburgerMenu)`
  cursor: pointer;
`

export default () => {
  
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Header>
        <Router>
          <Link to="/">
            <img src={logo} alt="Logo"/>
          </Link>
        </Router>
        <Burger
        color="white"
        isOpen={isOpen}
        menuClicked={handleClick}
        width={30}
        height={24}
        />
      </Header>
      <Navigation className={ isOpen? 'is-nav-open' : ''}>
        <Router>
          <NavLink to="/about" onClick={handleClick} >About me</NavLink>
          <NavLink to="/projects" onClick={handleClick} >Projects</NavLink>
          <NavLink to="/contact" onClick={handleClick} >Contact</NavLink>
          <NavLink to="/blog" onClick={handleClick} >Blog</NavLink>
        <div style={{ height: '4rem' }}> </div>
        </Router>
      </Navigation>
    </Wrapper>
  )
} 
