import React from "react"
import styled from "styled-components"

import { shadows } from "../theme/shadows.js"
import { colors } from "../theme/colors.js"

const ButtonCTA = styled.button`
  &,
  &:link,
  &:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 0.4rem;
    transition: all 0.3s ease-out;
    background-color: ${colors.colorPrimaryDark};
    color: ${colors.colorWhite};
    letter-spacing: 0.4rem;
    font-weight: 700;
    cursor: pointer;

    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.75s;
    animation-fill-mode: backwards;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${shadows.shadowLight};
    background-color: ${colors.colorPrimaryDark};

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translate(-1px);
    box-shadow: ${shadows.shadowLight};
  }

  /* &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 0.4rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.6s ease-in-out;
  }

  &--animated {
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.75s;
    animation-fill-mode: backwards;
  } */
`

export default ButtonCTA
