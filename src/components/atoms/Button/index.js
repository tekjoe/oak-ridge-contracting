import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border: none;
  border-bottom: 2px solid #3088da;
  padding: 0.5rem 2rem;
  background: transparent;
  font-size: 1rem;
  color: #c1c5d7;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    background: #3088da;
  }
`

export default ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}
