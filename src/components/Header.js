import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors.js"

const Header = styled.h3`
  font-size: 2.2rem;
  font-weight: bold;
  padding: 0.6rem 1.2rem;
  margin-bottom: 0.6rem;
  letter-spacing: 0.3rem;
  color: ${colors.colorGrey5};
`

export default Header
