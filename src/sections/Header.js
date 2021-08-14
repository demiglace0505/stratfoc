import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { backgrounds, colors } from "../theme/colors.js"
import { animations } from "../theme/animations.js"
import navLinks from "../constants/navLinks.js"

const Navbar = styled.nav`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 10%;
  height: 7rem;
  display: flex;
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  background: ${backgrounds.bgGreyDark};
`

const NavLogoContainer = styled.div`
  padding: 2rem;
`

const NavItem = styled.div`
  a {
    color: ${colors.colorWhite};
    margin-right: 1rem;
    text-transform: capitalize;
    font-weight: bold;
    padding: 1rem 0.5rem;
    font-size: 2rem;
    transition: ${animations.hover};
  }

  a:hover {
    color: ${colors.colorPrimaryLight};
  }
`

const Header = () => {
  return (
    <Navbar>
      <NavLogoContainer>
        <Link to="/">
          <StaticImage
            src="../assets/images/Stratfoc-light.svg"
            alt="Stratfoc"
            placeholder="tracedSVG"
            width={200}
          />
        </Link>
      </NavLogoContainer>
      <NavItem>
        {navLinks.map(l => {
          return (
            <Link to={l.url} key={l.id}>
              {l.text}
            </Link>
          )
        })}
      </NavItem>
    </Navbar>
  )
}

export default Header
