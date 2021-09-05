import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { rgba } from "polished"

import { colors } from "../theme/colors.js"
import Seo from "../components/seo.js"
import ProjectCard from "../components/ProjectCard.js"
import Header from "../components/Header.js"
import Subheader from "../components/Subheader.js"

const PageContainer = styled.main`
  padding: 6rem;
  min-height: calc(100vh - 7rem);
  background: linear-gradient(
    to right bottom,
    ${rgba(colors.colorAccent2, 1)},
    ${rgba(colors.colorPrimaryLight, 1)}
  );
`

const ProjectsContainer = styled.section`
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 2rem;
  /* background-color: yellow; */
`

const Projects = ({ data }) => {
  console.log(data)
  const {
    allStrapiProject: { edges: projects },
  } = data
  // console.log(projects)
  return (
    <PageContainer>
      <Seo title="Projects" />
      <Header>My Works and Projects</Header>
      <Subheader>This page is under construction</Subheader>
      <ProjectsContainer>
        {projects.map(p => {
          return <ProjectCard project={p.node} />
        })}
      </ProjectsContainer>
    </PageContainer>
  )
}

export const query = graphql`
  {
    allStrapiProject(sort: {order: DESC, fields: updatedAt}) {
      edges {
        node {
          excerpt
          featured
          github
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
          slug
          stack {
            stack_name
          }
          title
          url
          updatedAt
        }
      }
    }
  }
`

export default Projects
