import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors.js"
import socialLinks from "../constants/socialLinks"

const SocialMediaIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
`

const Icon = styled.a`
  margin-right: 1.4rem;
  font-size: 3.2rem;
  transition: all 0.4s ease-out;
  color: ${props => (props.dark ? colors.colorAccent1 : colors.colorAccent2)};

  &:hover {
    color: ${props =>
      props.dark ? colors.colorPrimaryDark : colors.colorPrimary};
  }
`

const SocialMediaIcons = props => {
  return (
    <SocialMediaIconsContainer>
      {socialLinks.map(s => {
        return (
          <Icon dark={props.dark} href={s.url} key={s.id} target="_blank">
            {s.icon}
          </Icon>
        )
      })}
    </SocialMediaIconsContainer>
  )
}

export default SocialMediaIcons
