import React from "react"
import styled from "styled-components"

import Seo from "../components/seo.js"
import AboutHero from "../sections/AboutHero.js"
import AboutMore from "../sections/AboutMore.js"

const About = () => {
  return (
    <div>
      <Seo title="About" />
      <AboutHero />
      <AboutMore />
    </div>
  )
}

export default About
