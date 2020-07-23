import React from "react"
import styled from "styled-components"

const Textarea = styled.textarea`
  border: none;
  border-bottom: ${({ variant, theme }) =>
    variant === "inverse"
      ? `2px solid ${theme.darkGray}`
      : "2px solid #c1c5d7"};
  padding: 0.5rem 0;
  background: transparent;
  font-size: 1rem;
  color: ${({ variant, theme }) =>
    variant === "inverse" ? theme.darkGray : "#c1c5d7"};
  resize: none;
  font-family: inherit;
  &:focus {
    outline: 2px dotted ${({ theme }) => theme.darkBlue};
  }
`

export default props => {
  return <Textarea {...props} />
}
