import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo.js"
import { colors } from "../theme/colors.js"
import { frontend, backend, misc, testing } from "../constants/techStack.js"
import AnimatedHeader from "../components/AnimatedHeader.js"
import TechStackIcons from "../components/TechStackIcons.js"
import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"

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
        <AnimatedHeader>Serialize Yourself.</AnimatedHeader>
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
        <Header>Tech Stack and Expertise</Header>
        <p>
          Whether front end or back end, I've got it covered. Have a look of the
          myriad of technologies that I have proven experience working with.
        </p>
        <Subheader>Frontend Technologies</Subheader>
        <TechStackIcons array={frontend} />
        <Subheader>Backend</Subheader>
        <TechStackIcons array={backend} />
        <Subheader>Testing Frameworks</Subheader>
        <TechStackIcons array={testing} />
        <Subheader>Worth Mentioning</Subheader>
        <TechStackIcons array={misc} />
      </ContentContainer>
    </AboutGrid>
  )
}

export default About
