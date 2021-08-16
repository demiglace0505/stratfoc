import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors"

const HeroHeaderText = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 0.4rem;
  margin-bottom: 0.4rem;
  color: ${colors.colorPrimaryDark};
  font-family: "Fjalla One";
`

// const HeroHeaderText = ({ text }) => {
//   return <StyledHeading>{text}</StyledHeading>
// }

export default HeroHeaderText
