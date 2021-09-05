import React from "react"
import { graphql } from "gatsby"

import Seo from "../../components/seo"
import Project from "../../sections/Project.js"

const ProjectTemplate = ({ data, pageContext: { title } }) => {
  const project = data.strapiProject
  // console.log("ProjectTemplate", data)
  return (
    <div>
      <Seo
        title={title.toUpperCase()}
        description={project.description}
        image={project.image.url}
      />
      <Project project={project} />
    </div>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
      }
      github
      url
      stack {
        stack_name
      }
    }
  }
`

export default ProjectTemplate
