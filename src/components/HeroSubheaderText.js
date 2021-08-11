import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors.js"

const StyledSubHeading = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
  margin-bottom: 1.5rem;
  color: ${colors.colorGrey5};
`

const HeroSubheaderText = ({ text }) => {
  return <StyledSubHeading>{text}</StyledSubHeading>
}

export default HeroSubheaderText
