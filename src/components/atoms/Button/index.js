import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border: none;
  border-bottom: ${({ variant }) =>
    variant === "inverse" ? "none" : "2px solid #3088da"};
  display: ${({ variant }) =>
    variant === "inverse" ? "inline-block" : "block"};
  font-size: 1rem;
  padding: ${({ variant }) =>
    variant === "inverse" ? "1rem 3rem" : "0.5rem 2rem;"};
  background: ${({ variant }) =>
    variant === "inverse" ? "white" : "transparent"};
  font-size: 1rem;
  color: ${({ variant }) =>
    variant === "inverse" ? "hsl(230,21%,23%)" : "#c1c5d7"};
  transition: all 0.3s;
  cursor: pointer;
  font-weight: ${({ variant }) => (variant === "inverse" ? "bold" : "normal")};
  text-transform: ${({ variant }) =>
    variant === "inverse" ? "uppercase" : "none"};
  &:hover {
    background: #3088da;
    color: white;
  }
`

export default ({ children, variant, ...props }) => {
  return (
    <Button {...props} variant={variant}>
      {children}
    </Button>
  )
}
