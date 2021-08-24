import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import SocialMediaIcons from "../components/SocialMediaIcons.js"
import { colors, backgrounds } from "../theme/colors.js"

const FooterContainer = styled.section`
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 3fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: ${backgrounds.bgGreyDark};
`

const SocialMediaIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

// const LogoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

const FooterContentContainer = styled.div`
  justify-self: start;
  display: flex;
  flex-direction: column;
`

const FooterText = styled.h5`
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  color: ${colors.colorWhite};
  margin-bottom: 0.4rem;

  span {
    color: ${colors.colorPrimary};
  }
`

const FooterAddress = styled.h6`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 0.6rem;
  color: ${colors.colorGrey2};
`

const Footer = () => {
  return (
    <FooterContainer>
      <StaticImage
        src="../assets/images/logo.png"
        width={150}
        alt="Stratfoc Logo"
        placeholder="dominantColor"
      ></StaticImage>
      <FooterContentContainer>
        <FooterText>
          This site is built by Christian Cruz with React and GatsbyJS.
        </FooterText>
        <FooterText>
          Copyright &copy; {new Date().getFullYear()} <span>Stratfoc</span>. All
          Rights Reserved.
        </FooterText>
        <FooterAddress>Bulacan | Philippines</FooterAddress>
        <SocialMediaIconsContainer>
          <SocialMediaIcons />
        </SocialMediaIconsContainer>
      </FooterContentContainer>
    </FooterContainer>
  )
}

export default Footer
