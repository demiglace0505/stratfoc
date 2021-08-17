import React from "react"
import styled from "styled-components"

import { colors, backgrounds } from "../theme/colors.js"
import { animations } from "../theme/animations.js"

const StackGroupContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StackItem = styled.a`
  display: flex;
  align-items: center;
  background-color: ${colors.colorGrey2};
  color: ${colors.colorPrimaryDark};
  padding: 0 0.6rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  transition: ${animations.hover};

  &:hover {
    transform: scale(1.1);
    background-color: ${colors.colorAccent1};
    color: ${colors.colorWhite};
  }
`

const StackIcon = styled.span`
  font-size: 1.8rem;
  transform: translateY(0.2rem);
  /* padding-top: 0.4rem; */
  margin-right: 0.6rem;
`

const StackText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.3rem;
`

const TechStackIcons = ({ array }) => {
  return (
    <StackGroupContainer>
      {array.map(i => {
        return (
          <StackItem href={i.url} target="_blank">
            <StackIcon>{i.icon}</StackIcon>
            <StackText>{i.name}</StackText>
          </StackItem>
        )
      })}
    </StackGroupContainer>
  )
}

export default TechStackIcons
