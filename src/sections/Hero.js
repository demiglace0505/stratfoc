import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { backgrounds } from "../theme/colors.js"
import ButtonCTA from "../components/ButtonCTA.js"
import HeroHeaderText from "../components/HeroHeaderText.js"
import HeroSubheaderText from "../components/HeroSubheaderText.js"
import SocialMediaIcons from "../components/SocialMediaIcons.js"

const HeroGrid = styled.section`
  height: 80vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
`

const HeroColor = styled.div`
  height: 100%;
  background-color: ${backgrounds.bgContentLight};
  grid-row: 1/1;
  grid-column: 1/8;
`

const HeroInfoContainer = styled.div`
  grid-row: 1/1;
  grid-column: 2 / 8;
  align-self: center;
`

const HeroImageContainer = styled.div`
  grid-row: 1/1;
  grid-column: 7/12;
  padding-top: 15%;
`

const Hero = () => {
  return (
    <HeroGrid>
      <HeroColor />
      <HeroInfoContainer>
        <HeroHeaderText text="Christian Cruz" />
        <HeroSubheaderText text="Full Stack Developer" />
        <Link to="/contact">
          <ButtonCTA text="get in touch" />
        </Link>
        <SocialMediaIcons />
      </HeroInfoContainer>
      <HeroImageContainer>
        <StaticImage src="../images/hero.svg" placeholder="tracedSVG" />
      </HeroImageContainer>
    </HeroGrid>
  )
}

export default Hero
