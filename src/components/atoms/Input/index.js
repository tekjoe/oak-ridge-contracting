import React from "react"
import styled from "styled-components"

const Input = styled.input`
  border: none;
  border-bottom: ${({ variant, theme }) =>
    variant === "inverse"
      ? `2px solid ${theme.darkGray}`
      : "2px solid #c1c5d7"};
  padding: 0.5rem 0;
  background: transparent;
  color: ${({ variant, theme }) =>
    variant === "inverse" ? theme.darkGray : "#c1c5d7"};
  font-size: 1rem;
`

export default props => {
  return <Input {...props} />
}
