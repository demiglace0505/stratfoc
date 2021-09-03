import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import profilePicture from "../assets/images/profile_picture.jpg"
import { colors } from "../theme/colors.js"
import { animations } from "../theme/animations.js"
import { shadows } from "../theme/shadows.js"
import AnimatedHeader from "../components/AnimatedHeader.js"

const AboutSelfContainer = styled.main`
  min-height: calc(100vh - 7rem);
  display: grid;
  /* padding: 8rem; */
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  /* height: 100%; */
`

const AvatarContainer = styled.div`
  display: flex;
  grid-row: 1/1;
  grid-column: 2 / span 6;
  /* height: 100%; */
  /* border: 2px solid blue; */
  /* background-color: orangered; */
  height: 80%;
  border-radius: 0.4rem;
  box-shadow: ${shadows.shadowMed};
  transition: ${animations.hover};
  z-index: 1;
  /* background-image: url(${profilePicture}); */
  /* background-size: cover; */
  /* background-repeat: no-repeat; */

  &:hover {
    transform: scale(1.01) translateY(-4px);
    z-index: 10;
  }
`

const ContentContainer = styled.article`
  /* align-self: stretch; */
  padding: 2rem;
  grid-row: 1/1;
  grid-column: 6/12;
  background-color: ${colors.colorWhite};
  border-radius: 0.4rem;
  box-shadow: ${shadows.shadowMed};
  transition: ${animations.hover};
  z-index: 5;

  &:hover {
    transform: scale(1.01) translateY(-4px);
    z-index: 10;
  }

  p {
    color: ${colors.colorGrey4};
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.3rem;
  }
`

const AboutHero = () => {
  return (
    <div>
      <AboutSelfContainer>
        <AvatarContainer>
          <StaticImage
            src="../assets/images/profile_picture.jpg"
            layout="fullWidth"
            alt="Profile picture"
            placeholder="dominantColor"
            layout="constrained"
            // imgClassName="about-profilePicture"
          />
        </AvatarContainer>
        <ContentContainer>
          <AnimatedHeader>Serialize Yourself.</AnimatedHeader>
          <p>
            My name is Christian Cruz, and I am based in the beautiful province
            of Bulacan in the Philippines. After I graduated with a Bachelor's
            degree in Engineering, I enrolled myself to various programs and
            courses to learn programming and web development.
          </p>
          <p>
            I mainly specialize in the MERN (Mongo, Express, React, Nodejs)
            stack, but I am very much willing to take on other technologies as
            well.
          </p>
        </ContentContainer>
      </AboutSelfContainer>
    </div>
  )
}

export default AboutHero
