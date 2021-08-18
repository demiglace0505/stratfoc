import React from "react"
import styled from "styled-components"

import Seo from "../components/seo.js"
import AboutSelf from "../sections/AboutSelf.js"
import TechStack from "../sections/TechStack.js"

const About = () => {
  return (
    <div>
      <Seo title="About" />
      <AboutSelf />
      <TechStack />
    </div>
  )
}

export default About
