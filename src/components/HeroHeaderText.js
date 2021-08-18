import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors"

const HeroHeaderText = styled.h1`
  font-size: 6.6rem;
  font-weight: 400;
  letter-spacing: 0.6rem;
  margin-bottom: 0.4rem;
  font-family: "Fjalla One";

  background-image: linear-gradient(
    to right,
    ${colors.colorPrimaryDark},
    ${colors.colorPrimary}
  );
  -webkit-background-clip: text;
  color: transparent;
`

// const HeroHeaderText = ({ text }) => {
//   return <StyledHeading>{text}</StyledHeading>
// }

export default HeroHeaderText
