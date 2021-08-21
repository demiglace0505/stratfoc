import React from "react"

import Seo from "../components/seo"
import Hero from "../sections/Hero"
import WorkExperience from "../sections/WorkExperience.js"
import TechStack from "../sections/TechStack.js"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero />
    <TechStack />
    <WorkExperience />
  </div>
)

export default IndexPage
