import React from "react"
import styled from "styled-components"

import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const PageContainer = styled.main`
  height: 100vh;
  /* background-color: red; */
`

const DarkBackground = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: blur(3px) brightness(0.45);
  }
`

const Project = ({ project }) => {
  console.log(project)
  const image = getImage(project.image.localFile)
  const bgImage = convertToBgImage(image)

  return (
    <DarkBackground Tag="main" {...bgImage} preserveStackingContext>
      <PageContainer>
        <h1>TEEEEEEEEEEEEEEST</h1>
      </PageContainer>
      {/* <GatsbyImage image={image} /> */}
    </DarkBackground>
  )
}

export default Project
