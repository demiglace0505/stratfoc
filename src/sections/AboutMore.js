import React from "react"
import styled from "styled-components"

import { backgrounds } from "../theme/colors.js"

const SectionContainer = styled.section`
  padding: 6rem;
  background-color: ${backgrounds.bgOffWhite};
  /* background-color: red; */
`

const ContentContainer = styled.article`
  margin: 0 auto;
  max-width: 80%;
  /* border: blue 2px solid; */
  font-family: "Architects Daughter";
`

const ContentHeading = styled.h3`
  font-family: "Architects Daughter";
  font-weight: bold;
  font-size: 3.2rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1rem;
`

const ContentText = styled.p`
  font-family: "Architects Daughter";
  margin: 0 8rem;
  font-weight: 500;
  font-size: 2.2rem;
  /* letter-spacing: 0.1rem; */
  margin-bottom: 1.4rem;
`

const AboutMore = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <ContentHeading>More about myself...</ContentHeading>
        <ContentText>
          I am a tech geek, and I am into virtually anything tech-related.
          Whether be it the latest hot new hardware releases and technologies,
          blockchain or any other buzzword, I guarantee that I have an
          approximate knowledge of it.
        </ContentText>
        <ContentText>
          During my free time, I either spend my hours with the boys in our
          favorite 5vs5 MOBA game. Other times, I just let myself wander the
          interwebs, doing random stuff like watching random videos, and digging
          into a random rabbit hole in the interwebs. I also enjoy other genres
          of games, but I got to admit that I seriously suck at shooter games.
          I'm not into extreme physical activity, but I love doing a short run
          every week, or at least so in the past when the pandemic hasn't
          basically locked me in my home.
        </ContentText>
        <ContentText>
          I also love discovering and learning new stuff, especially with
          regards to programming. I have already went through a bunch of Udemy
          courses and a couple of MOOC's from University of Helsinki. So far, I
          have set my sights in learning Spring Framework and I plan on
          integrating what I learn as much as I can into my career.
        </ContentText>
      </ContentContainer>
    </SectionContainer>
  )
}

export default AboutMore
