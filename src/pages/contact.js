import React from "react"
import styled from "styled-components"

import { colors, backgrounds } from "../theme/colors.js"
import { shadows } from "../theme/shadows.js"
import { rgba } from "polished"

import AnimatedHeader from "../components/AnimatedHeader.js"
import ButtonCTA from "../components/ButtonCTA.js"
import TextArea from "../components/TextArea.js"
import Input from "../components/Input.js"
import Seo from "../components/seo.js"

const PageContainer = styled.main`
  min-height: calc(100vh - 7rem);
  padding: 8rem;
  background: linear-gradient(
    to right bottom,
    ${rgba(colors.colorPrimary, 0.5)},
    ${rgba(colors.colorAccent1, 1)}
  );
`

const FormContainer = styled.article`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 4rem;
  height: 100%;
  background-color: ${backgrounds.bgGreyLight};
  padding: 4rem;
  box-shadow: ${shadows.shadowMed};
  border-radius: 4px;
`

const TextContainer = styled.article``

const Header = styled.h2`
  margin: 0 auto;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  margin-bottom: 2rem;
  color: ${colors.colorPrimaryDark};
  font-family: "Courier";
`

const Contact = () => {
  return (
    <PageContainer>
      <Seo title="Contact" />
      <FormContainer>
        <TextContainer>
          <AnimatedHeader>Get in touch.</AnimatedHeader>
          <p>
            I would love to hear from you. Whether it is for brainstorming or
            opportunities for building the next big thing, get in touch by
            filling up the contact form.
          </p>
        </TextContainer>
        <form
          action="https://formspree.io/f/mayalybg"
          method="POST"
          autocomplete="off"
        >
          <Input
            type="email"
            name="email"
            placeholder="Your email"
            autocomplete="off"
            required
          />
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            autocomplete="off"
            required
          />
          <TextArea
            name="message"
            rows="5"
            placeholder="Your message"
            required
          ></TextArea>
          <ButtonCTA type="submit">Submit</ButtonCTA>
        </form>
      </FormContainer>
    </PageContainer>
  )
}

export default Contact
