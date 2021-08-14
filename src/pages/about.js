import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { colors } from "../theme/colors.js"
import Seo from "../components/seo.js"
import AnimatedHeader from "../components/AnimatedHeader.js"

const AboutGrid = styled.main`
  min-height: calc(100vh - 7rem);
  display: grid;
  padding: 8rem;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  height: 100%;
`

const AvatarContainer = styled.div`
  grid-row: 1/1;
  grid-column: 2/6;
  height: 100%;
`

const ContentContainer = styled.article`
  align-self: stretch;
  grid-row: 1/1;
  grid-column: 6/12;
`

const ContentHeading = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  color: ${colors.colorPrimaryDark};
  font-family: "Courier";
`

const About = () => {
  return (
    <AboutGrid>
      <Seo title="About" />
      <AvatarContainer>
        <StaticImage
          src="../assets/images/profile_picture.jpg"
          width={300}
          layout="constrained"
          alt="Profile picture"
          placeholder="dominantColor"
          imgClassName="about-profilePicture"
        />
      </AvatarContainer>
      <ContentContainer>
        <AnimatedHeader text="Serialize yourself." />
        <p>
          My name is Christian Cruz, and I am based in the Philippines. After I
          graduated with a Bachelor's degree in Engineering, I worked hard to
          learn fullstack javascript development. I am very much eager to learn
          more through hands-on experience and projects.
        </p>
        <p>
          The philosophy that encompasses all my works is "Strategic Focus". It
          is with this mantra that I am able to motivate myself to strive for
          greatness, to recognize my passions, and to serialize my goals.
        </p>
        <p>
          I am also a technology geek, and I love the newest hot stuff about
          technology. My hobbies include playing video games and mindlessly
          getting lost in the internet.
        </p>
      </ContentContainer>
    </AboutGrid>
  )
}

export default About
