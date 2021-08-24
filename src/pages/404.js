import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo.js"
import ButtonCTA from "../components/ButtonCTA.js"

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
          src="../assets/images/logo-dark.png"
          alt="Stratfoc Logo"
          placeholder="tracedSVG"
        ></StaticImage>
      </LogoContainer>
      <h1>404: The page you are trying to access does not exist</h1>

      <Link to="/">
        <ButtonCTA>Return Home</ButtonCTA>
      </Link>
    </PageContainer>
  )
}

export default NotFoundPage
