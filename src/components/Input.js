import React from "react"
import styled from "styled-components"

import { colors } from "../theme/colors.js"
import { shadows } from "../theme/shadows.js"

const FormInput = styled.input`
  display: block;
  font-size: 1.5rem;
  font-family: inherit;
  color: inherit;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  border: none;
  width: 90%;

  border-bottom: 3px solid transparent;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: ${shadows.shadowLight};
    border-bottom: 3px solid ${colors.colorPrimary};
  }

  &:invalid {
    border-bottom: 3px solid ${colors.colorAccent1};
  }
`

const Input = ({ type, name, placeholder, required, autocomplete }) => {
  return (
    <FormInput
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      autocomplete={autocomplete}
    />
  )
}

export default Input
