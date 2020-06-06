import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import HamburgerMenu from 'react-hamburger-menu'
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
  const [isScrolled, setScrolled] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
  }

  useEffect(() => {
    document.addEventListener('scroll', e => {
      setScrolled(window.pageYOffset > 120 ? true : false)
    })
  })

  return (
    <Wrapper>
      <Header
        className={`${isOpen? 'is-nav-open' : ''}${isScrolled ? 'is-scrolled': ''}`}>
        <AnchorLink href="#start">
          <img src={logo} alt="Logo"/>
        </AnchorLink>
        <Burger
        color="white"
        isOpen={isOpen}
        menuClicked={handleClick}
        width={30}
        height={24}
        />
      </Header>
      <Navigation className={ isOpen? 'is-nav-open' : ''}>
        <NavLink offset="80" href="#about" onClick={handleClick} >About me</NavLink>
        <NavLink offset="80" href="#projects" onClick={handleClick} >Projects</NavLink>
        <NavLink offset="80" href="#contact" onClick={handleClick} >Contact</NavLink>
        <NavLink offset="80" href="#blog" onClick={handleClick} >Blog</NavLink>
      </Navigation>
    </Wrapper>
  )
} 
