import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Hero from "../sections/Hero"

const IndexPage = () => (
  <div>
    <Seo title="Home" />
    <Hero />
  </div>
)

export default IndexPage
