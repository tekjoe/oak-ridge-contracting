import React from "react"
import styled from "styled-components"

const Input = styled.input`
  border: none;
  border-bottom: 2px solid #c1c5d7;
  padding: 0.5rem 0;
  background: transparent;
  font-size: 1rem;
  color: #c1c5d7;
`

export default ({ type, placeholder, id }) => {
  return <Input type={type} placeholder={placeholder} id={id} />
}
