import React from "react"
import styled from "styled-components"

import { colors, backgrounds } from "../theme/colors.js"

const Header = styled.h2`
  /* font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  color: ${colors.colorPrimaryDark};
  font-family: "Courier"; */

  display: inline-block;
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
  font-family: "Courier";
  font-weight: bold;
  color: ${colors.colorPrimaryDark};
  text-decoration: none;
  cursor: default;
  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${colors.colorPrimaryDark} 50%
  );
  background-size: 300%;
  transition: all 0.4s ease-out;

  &:hover,
  &:active {
    background-position: 100%;
    color: ${colors.colorPrimaryLight};
    transform: translateX(1rem);
  }
`

const AnimatedHeader = ({ text }) => {
  return <Header>{text}</Header>
}

export default AnimatedHeader
