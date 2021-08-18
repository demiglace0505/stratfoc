import React from "react"

import Seo from "../components/seo"
import Hero from "../sections/Hero"
import WorkExperience from "../sections/WorkExperience.js"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero />
    <WorkExperience />
  </div>
)

export default IndexPage
