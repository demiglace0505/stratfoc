import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors.js"

const Header = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  text-align: center;
  padding: 0.6rem 1.2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.9rem;
  text-transform: uppercase;
  color: ${colors.colorBlack};
`

export default Header
