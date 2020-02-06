import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-scroll"
// import { animated, useSpring, config }

// TODO: DELETE HamburgerToggler This is just a styling test
import HamburgerToggler from "../navigation/mobileMenu/hamburgerToggle"

import DesktopMenu from "./desktopMenu"
import LogoNavbar from "../UI/logoNavbar"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0;
  left: 0;
  z-index: 20;
  padding: 0 2%;
  background: var(--navbar);
  box-shadow: 0 0.5rem 2rem var(--shadow-color);
  transition: background 0.2s ease-out;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: 7rem;
`

const StyledLink = styled(Link)`
  cursor: pointer;
  /* display: flex; */
`

const Navbar = () => {
  const [Mobile, setMobile] = useState(null)

  const changeMobile = () => {
    window.matchMedia("(max-width: 37.5em)").matches
      ? setMobile(console.log("💩💩💩💩💩💩💩💩💩💩💩💩💩"))
      : setMobile(console.log("👍🏼👍🏼👍🏼👍🏼👍🏼👍🏼👍🏼👍🏼"))
  }
  useEffect(() => {
    changeMobile()
  })

  return (
    <StyledHeader>
      <Wrapper>
        <StyledLink to="header">
          <LogoNavbar />
        </StyledLink>
        <DesktopMenu />
        <HamburgerToggler />
      </Wrapper>
    </StyledHeader>
  )
}

export default Navbar
