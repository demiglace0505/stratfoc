import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { BsCodeSlash } from "react-icons/bs"
import { IoFlaskOutline } from "react-icons/io5"
import { IoSettingsOutline } from "react-icons/io5"
import { SiSonarcloud } from "react-icons/si"

import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"
import techBackground from "../assets/images/techBackground.jpg"
import { colors, backgrounds } from "../theme/colors.js"
import { shadows } from "../theme/shadows.js"
import { animations } from "../theme/animations.js"
import { frontend, backend, misc, testing } from "../constants/techStack.js"
import TechStackIcons from "../components/TechStackIcons.js"
// import Subheader from "../components/Subheader.js"

const SectionContainer = styled.section`
  min-height: 100vh;
  padding: 9rem 4rem;
  background-image: linear-gradient(
      to right bottom,
      ${rgba(backgrounds.bgContentLight, 0.8)},
      ${rgba(colors.colorAccent2, 0.7)}
    ),
    url(${techBackground});
  background-size: cover;
  /* background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat; */
`

const TechStackContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 4.5rem;
  /* background-color: red; */
`

// const Grid = styled.div`
//   /* background-color: yellow; */
//   padding: 2rem;
//   max-width: 100%;
//   display: grid;
//   grid-template-columns: repeat(2, minmax(200px, 350px));
//   grid-gap: 1rem;
// `

const Card = styled.div`
  min-height: 35rem;
  padding: 1rem;
  /* background-color: red; */
  background-color: ${rgba(colors.colorWhite, 0.7)};
  border-radius: 0.3rem;
  box-shadow: ${shadows.shadowLight};
  transition: ${animations.hover};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
    box-shadow: ${shadows.shadowHard};
  }
`

const CardIcon = styled.div`
  font-size: 6.6rem;
  margin-bottom: 0.2rem;
  color: ${colors.colorAccent1};
`

// const Header = styled.h2`
//   font-size: 3.2rem;
//   font-weight: bold;
//   text-align: center;
//   padding: 0.6rem 1.2rem;
//   margin-bottom: 2rem;
//   letter-spacing: 0.9rem;
//   text-transform: uppercase;
//   color: ${colors.colorBlack};
// `

// const Subheader = styled.h3`
//   font-size: 2.2rem;
//   font-weight: 500;
//   text-align: center;
//   padding: 0.3rem 1rem;
//   margin-bottom: 2rem;
//   letter-spacing: 0.2rem;
//   color: ${colors.colorGrey5};
// `

const CardHeader = styled.h4`
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  padding: 0.3rem 1rem;
  margin-bottom: 2rem;
  letter-spacing: 0.5rem;
  color: ${colors.colorGrey5};
`

const TechStack = () => {
  return (
    <SectionContainer>
      <Header>Tech Stack and Expertise</Header>
      <Subheader>
        Whether front end or back end, I've got it covered. Have a look of the
        modern, compelling technologies that I have proven experience working
        with.
      </Subheader>
      <TechStackContainer>
        <Card>
          <CardIcon>
            <BsCodeSlash></BsCodeSlash>
          </CardIcon>
          <CardHeader>Frontend</CardHeader>
          <TechStackIcons array={frontend} />
        </Card>
        <Card>
          <CardIcon>
            <IoSettingsOutline></IoSettingsOutline>
          </CardIcon>
          <CardHeader>Backend</CardHeader>
          <TechStackIcons array={backend} />
        </Card>
        <Card>
          <CardIcon>
            <IoFlaskOutline></IoFlaskOutline>
          </CardIcon>
          <CardHeader>Testing Frameworks</CardHeader>
          <TechStackIcons array={testing} />
        </Card>
        <Card>
          <CardIcon>
            <SiSonarcloud></SiSonarcloud>
          </CardIcon>
          <CardHeader>Worth Mentioning</CardHeader>
          <TechStackIcons array={misc} />
        </Card>
      </TechStackContainer>
    </SectionContainer>
  )
}

export default TechStack
