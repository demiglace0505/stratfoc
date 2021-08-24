import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { CgChevronDoubleRight } from "react-icons/cg"

import { colors } from "../theme/colors.js"
import Header from "../components/Header.js"
import { animations } from "../theme/animations.js"

const WorkExperienceContainer = styled.section`
  padding: 5rem;
  /* max-width: 1180px; */
  /* background-color: yellow; */
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-column-gap: 4rem;
`

const CompanySelectionContainer = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 4rem;
  padding-left: 2rem;
`

const CompanyButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  text-align: center;
  text-transform: capitalize;
  font-size: 1.8rem;
  letter-spacing: 0.3rem;
  margin: 0.5rem;
  padding: 0.25rem 0;
  line-height: 1;
  transition: ${animations.hover};
  cursor: pointer;
  color: ${props => (props.isActive ? colors.colorPrimary : colors.colorBlack)};
  border-left: ${props =>
    props.isActive ? `2px solid ${colors.colorPrimary}` : ""};

  &:hover {
    color: ${colors.colorPrimary};
    border-left: 2px solid ${colors.colorPrimary};
  }
`

const CompanyDetailsContainer = styled.div`
  /* background-color: green; */
`

const PositionHeading = styled.h3`
  font-size: 3.2rem;
  font-weight: 400;
  /* padding: 0.3rem 1rem; */
  margin-bottom: 0.2rem;
  letter-spacing: 0.4rem;
  color: ${colors.colorGrey5};
`

const CompanyTag = styled.a`
  /* display: flex;
  align-items: center; */
  display: inline-block;
  font-size: 1.6rem;
  background-color: ${colors.colorGrey2};
  color: ${colors.colorPrimaryDark};
  padding: 0 0.6rem;
  border-radius: 0.4rem;
  transition: ${animations.hover};

  &:hover {
    transform: scale(1.1);
    background-color: ${colors.colorAccent1};
    color: ${colors.colorWhite};
  }
`

const DateHeader = styled.h4`
  font-size: 2rem;
  font-weight: 300;
  /* padding: 0.3rem 1rem; */
  margin-bottom: 0.8rem;
  letter-spacing: 0.8rem;
  color: ${colors.colorGrey4};
`

const JobDescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 1.8rem;
  margin-bottom: 0.7rem;
`

const Chevron = styled.i`
  color: ${colors.colorPrimary};
  font-weight: bold;
`

const WorkExperience = () => {
  const data = useStaticQuery(query)
  // console.log(data)
  const jobs = data.allStrapiWorkExperience.nodes
  const [job, setJob] = useState(0)
  const { company, position, date, jobDescription } = jobs[job]
  // console.log(jobs[0])

  return (
    <WorkExperienceContainer>
      <Header>Work Experience</Header>
      <GridContainer>
        {/* Left side company selection butotns */}
        <CompanySelectionContainer>
          {jobs.map((item, index) => {
            return (
              <CompanyButton
                key={index}
                onClick={() => setJob(index)}
                // logic for current selected item
                isActive={index === job ? true : false}
              >
                {item.company}
              </CompanyButton>
            )
          })}
        </CompanySelectionContainer>

        {/* Right side information */}
        <CompanyDetailsContainer>
          <PositionHeading>{position}</PositionHeading>
          <CompanyTag>{company}</CompanyTag>
          <DateHeader>{date}</DateHeader>
          {jobDescription.map(item => {
            return (
              <JobDescriptionContainer key={item.id}>
                <Chevron>
                  <CgChevronDoubleRight />
                </Chevron>
                <p>{item.jobDescription}</p>
              </JobDescriptionContainer>
            )
          })}
        </CompanyDetailsContainer>
      </GridContainer>
    </WorkExperienceContainer>
  )
}

const query = graphql`
  {
    allStrapiWorkExperience(sort: { fields: createdAt, order: DESC }) {
      nodes {
        company
        date
        position
        jobDescription {
          jobDescription
          id
        }
      }
    }
  }
`

export default WorkExperience
