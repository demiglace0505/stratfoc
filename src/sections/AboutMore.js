import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

import { colors } from "../theme/colors"
import Header from "../components/Header.js"

const SectionContainer = styled.section`
  display: grid;
  padding: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2rem;
  background-color: ${colors.colorGrey2};
`

const Cell = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 6rem;
  /* border: 2px solid blue; */
  /* background-color: orangered;
  padding: 6rem; */

  p {
    font-size: 1.8rem;
  }
`

const AboutStratfoc = () => {
  return (
    <Cell>
      <Header>About Stratfoc</Header>
      <p>
        Stratfoc is the personal brand that I created. It is a portmanteau and
        stands for
        {<strong> Strategic Focus</strong>}, which is the discipline that I
        abide by in my endeavours. It is with this mantra that I am able to
        motivate myself to strive for greatness, recognize my passions, and
        serialize goals.
      </p>
      <p>
        The logo is an {<em>ensō</em>} - a single, unbroken, creative
        brushstroke in an open circle which signifies an incessant pursuit for
        development, growth and ultimately, perfection.
      </p>
    </Cell>
  )
}

{
  /* <p>
            The philosophy that encompasses all my works is "Strategic Focus".
            It is with this mantra that I am able to motivate myself to strive
            for greatness, to recognize my passions, and to serialize my goals.
          </p> */
}
{
  /* <p>
            I am also a technology geek, and I love the newest hot stuff about
            technology. My hobbies include playing video games and mindlessly
            getting lost in the internet.
          </p> */
}

const AboutMore = () => {
  return (
    <SectionContainer>
      <AboutStratfoc />
      <Cell>
        <StaticImage
          src="../assets/images/logo-dark.png"
          placeholder="tracedSVG"
        />
      </Cell>
    </SectionContainer>
  )
}

export default AboutMore
