import React from "react"
import styled from "styled-components"

const Card = styled.div`
  background: hsl(230, 21%, 23%);
  height: ${({ variant }) => (variant === "fourth" ? "524px" : "auto")};
  width: 50%;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    &:nth-of-type(even) {
      margin: 0 1rem;
    }
  }
`

export default ({ children, variant }) => {
  return <Card variant={variant}>{children}</Card>
}
