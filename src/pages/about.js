import React from "react"
import styled from "styled-components"

import Seo from "../components/seo.js"
import AboutHero from "../sections/AboutHero.js"
import AboutStratfoc from "../sections/AboutStratfoc.js"
import AboutMore from "../sections/AboutMore.js"

const About = () => {
  return (
    <div>
      <Seo title="About" />
      <AboutHero />
      <AboutStratfoc />
      <AboutMore />
    </div>
  )
}

export default About
