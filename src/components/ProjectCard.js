import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

import { colors } from "../theme/colors.js"
import { shadows } from "../theme/shadows.js"
import { animations } from "../theme/animations.js"

const Card = styled.article`
  min-height: 35rem;
  width: 100%;
  background-color: ${rgba(colors.colorWhite, 0.7)};
  border-radius: 0.3rem;
  box-shadow: ${shadows.shadowLight};
  transition: ${animations.hover};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`

const CardDetailsContainer = styled.div`
  padding: 1rem;
`

const TechTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TechTag = styled.div`
  background-color: ${colors.colorGrey2};
  color: ${colors.colorPrimaryDark};
  padding: 0 0.6rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.3rem;
`

const CardHeader = styled.span`
  display: flex;

  a {
    letter-spacing: 0.2rem;
    margin-right: 1.4rem;
    text-decoration: none;
  }
`

const Icon = styled.a`
  font-size: 2.6rem;
  margin-right: 1.4rem;
  transition: all 0.4s ease-out;
  color: ${colors.colorAccent1};

  &:hover {
    color: ${colors.colorPrimaryDark};
  }
`

const ProjectCard = ({ project }) => {
  // console.log("ProjectCard", project)
  return (
    <Card>
      <Link to={`/projects/${project.slug}`}>
        <GatsbyImage
          image={getImage(project.image.localFile)}
          alt={project.title}
          className="project-img"
        />
      </Link>
      <CardDetailsContainer>
        <CardHeader>
          <Link to={`/projects/${project.slug}`}>
            <h3>{project.title}</h3>
          </Link>
          <span>
            <Icon href={project.github} target="_blank">
              <FaGithubSquare />
            </Icon>
            <Icon href={project.url} target="_blank">
              <FaShareSquare />
            </Icon>
          </span>
        </CardHeader>
        <p>{project.excerpt}</p>
        <TechTagContainer>
          {project.stack.map(s => {
            return <TechTag>{s.stack_name}</TechTag>
          })}
        </TechTagContainer>
      </CardDetailsContainer>
    </Card>
  )
}

export default ProjectCard
