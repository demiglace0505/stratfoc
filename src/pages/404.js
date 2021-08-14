import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo.js"
import ButtonCTA from "../components/ButtonCTA.js"
import AnimatedHeader from "../components/AnimatedHeader.js"

const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: calc(100vh - 7rem);
`

const LogoContainer = styled.div`
  margin: 4rem 0;
`

const NotFoundPage = () => {
  return (
    <PageContainer>
      <Seo title="Projects" />
      <LogoContainer>
        <StaticImage
          src="../assets/images/logo-dark.svg"
          alt="Stratfoc Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      </LogoContainer>
      <AnimatedHeader text="404: Page doesn't exist" />
      <Link to="/">
        <ButtonCTA text="Return Home" />
      </Link>
    </PageContainer>
  )
}

export default NotFoundPage
