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

  &:hover {
    color: ${colors.colorPrimaryDark};
  }
`

const SocialMediaIcons = () => {
  return (
    <SocialMediaIconsContainer>
      {socialLinks.map(s => {
        return (
          <Icon href={s.url} key={s.id}>
            {s.icon}
          </Icon>
        )
      })}
    </SocialMediaIconsContainer>
  )
}

export default SocialMediaIcons
